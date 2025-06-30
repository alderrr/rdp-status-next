$clientName = $env:CLIENTNAME

if ($clientName) {
    Invoke-RestMethod -Uri "https://rdp-dev1-status.vercel.app/api/status" `
        -Method Post `
        -ContentType "application/json" `
        -Body (@{ client = $clientName } | ConvertTo-Json)
}
