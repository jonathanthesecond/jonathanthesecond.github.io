param([string]$Root, [int]$Port = 8765)
$types = @{ '.html'='text/html; charset=utf-8'; '.css'='text/css'; '.js'='application/javascript'; '.svg'='image/svg+xml'; '.png'='image/png'; '.jpg'='image/jpeg'; '.otf'='font/otf'; '.pdf'='application/pdf'; '.xml'='application/xml'; '.txt'='text/plain' }
$l = New-Object System.Net.HttpListener; $l.Prefixes.Add("http://localhost:$Port/"); $l.Start()
while ($l.IsListening) {
  $c = $l.GetContext(); $p = [Uri]::UnescapeDataString($c.Request.Url.AbsolutePath.TrimStart('/')); if ($p -eq '') { $p = 'index.html' }
  $f = Join-Path $Root $p; $code = 200
  if (-not (Test-Path $f -PathType Leaf)) { $f = Join-Path $Root '404.html'; $code = 404 }
  $b = [IO.File]::ReadAllBytes($f); $ext = [IO.Path]::GetExtension($f).ToLower()
  $c.Response.StatusCode = $code; if ($types[$ext]) { $c.Response.ContentType = $types[$ext] }
  $c.Response.OutputStream.Write($b, 0, $b.Length); $c.Response.Close()
}
