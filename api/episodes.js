const CryptoJS = require('crypto-js');
const fetch = require('node-fetch');

function generateAuthHeaders() {
  const authKey = process.env.AUTH_KEY;
  const secretKey = process.env.SECRET_KEY;
  const userAgent = process.env.USER_AGENT;

  const apiHeaderTime = Math.floor(Date.now() / 1000);
  const hash = CryptoJS.SHA1(authKey + secretKey + apiHeaderTime).toString(CryptoJS.enc.Hex);

  return {
    'User-Agent': userAgent,
    'X-Auth-Key': authKey,
    'X-Auth-Date': apiHeaderTime.toString(),
    Authorization: hash,
  };
}

module.exports = async (req, res) => {
  try {
    const { feedId, max } = req.query || {};
    if (!feedId) {
      res.status(400).json({ error: 'Feed ID parameter is required' });
      return;
    }

    const apiEndpoint = process.env.API_ENDPOINT;
    const headers = generateAuthHeaders();

    const url = `${apiEndpoint}/episodes/byitunesid?id=${encodeURIComponent(feedId)}${max ? `&max=${encodeURIComponent(max)}` : ''}`;
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    const contentType = response.headers.get('content-type') || '';
    if (response.ok && contentType.includes('application/json')) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      const rawText = await response.text();
      res.status(500).json({ error: 'Invalid response from API', rawText });
    }
  } catch (err) {
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};
