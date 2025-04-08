<div class="ContentEN">
    <h1 class="header">RegisterList</h1>
    <table id="dataTableEN">
        <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>ChangeRule</th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
    </table>
    <form class="Login-field">
        <label>Name:</label>
        <input class="text-field" id="name-fieldEN" type="text" placeholder="Name" required>

        <label>Surname:</label>
        <input class="text-field" id="surname-fieldEN" type="text" placeholder="Surname" required><br>

        <label>Username:</label>
        <input class="text-field" id="username-fieldEN" type="text" placeholder="UserName" required><br>

        <label>Password:</label>
        <input class="text-field" id="password-fieldEN" type="password" placeholder="Password" required>
        <button class="button-seethroughEN" type="button" onclick="seethroughEN()">👁️</button><br>
        <button class="button" id="RegisterEN">Register</button><br>
        <div id="alartMessage"></div>
    </form>
</div>