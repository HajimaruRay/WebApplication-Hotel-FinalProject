<div class="ContentEN">
        <h1 class="header">Booking</h1>
        <table id="dataTableEN">
            <thead>
                <tr>
                    <th>Room Type</th>
                    <th>Room Number</th>
                    <th>Days Amount</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Booking Name</th>
                    <th>Delete booking</th>
                </tr>
            </thead>
            <tbody id="tableBodyEN"></tbody>
        </table>

        <form class="Booking-field">

        <label>Name:</label>
        <input class="text-field" id="name-fieldEN" type="text" placeholder="Name" onchange="bookingEN()" required>

        <label>Surname:</label>
        <input class="text-field" id="surname-fieldEN" type="text" placeholder="Surname" onchange="bookingEN()" required><br>

        <label>Check in date:</label>
        <input class="text-field" id="startDate-fieldEN" type="date" onchange="bookingEN()" required>

        <label>Check out date:</label>
        <input class="text-field" id="endDate-fieldEN" type="date" onchange="bookingEN()" required><br>
        <label>Room Number:</label>
        <select class="text-field" id="selected-field-RoomNumberEN" onchange="bookingEN()" required>
            <option value="" disabled selected>Room Number</option>
            <option value="200">200</option>
            <option value="201">201</option>
            <option value="202">202</option>
            <option value="203">203</option>
            <option value="204">204</option>
            <option value="205">205</option>
            <option value="300">300</option>
            <option value="301">301</option>
            <option value="302">302</option>
        </select><br>
        <button class="button" id="BookingEN" onclick="saveDataEN()">Booking</button><br>
    </form>
    </div>