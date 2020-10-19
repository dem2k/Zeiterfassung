# Zeiterfassung

`curl.exe -v --noproxy "*" -X POST -H "Content-Type:application/json" -d "@test.json" http://localhost:8080/times`

test.json
```
{
  "user": "dima",
  "date": "2020-09-10",
  "times": [
    { "start": "09:00", "stop": "12:00" },
    { "start": "13:00", "stop": "18:00" }
  ]
}
```

POST method is not implemented now. Try `curl.exe -v http://localhost:8080/api/times` or from Dev-Console in your Browser:
```
fetch("http://localhost:8080/api/times").then(
  function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
```

Swagger-UI:  http://localhost:8080/swagger-ui.html


Um frontend zu starten:
```
cd frontend
npm run start
```
oder startRect.bat benutzen.
