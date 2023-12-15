export const authView = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>epicaJourney API</title>
</head>

<body>
    <h1>Auth</h1>
    <hr>
    <form action="/api/auth/login" method="post">
        <label >
            <input type="email" name="email" id="name">
        </label>
        <label >
            <input type="password" name="password" id="password" >
        </label>
        <button type="submit">Login</button>
    </form>
</body>

</html>
`