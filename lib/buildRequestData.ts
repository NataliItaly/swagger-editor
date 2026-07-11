export default function buildRequestData(
  serverUrl: string,
  path: string,
  parameters: Record<string, string>,
) {
  console.log('data in buildrequest', {
    serverUrl,
    path,
  });
  let url = `${serverUrl}${path}`;

  const query = new URLSearchParams();
  const headers: Record<string, string> = {};
  console.log('parameters', parameters);
  Object.entries(parameters).forEach(([key, value]) => {
    const [location, name] = key.split(':');

    if (location === 'path') {
      url = url.replace(`{${name}}`, value);
    }

    if (location === 'query' && value.trim() !== '') {
      query.append(name, value);
    }

    if (location === 'header') {
      headers[name] = value;
    }
  });

  const queryString = query.toString();

  if (queryString) {
    url += `?${queryString}`;
  }
  console.log('buildRequestData result', {
    url,
    headers,
  });
  return { url, headers };
}
