<div class="ContentEN">
    <a class="Text">For 2-4 people</a><br>
    <table>
        <tr>
            <td rowspan="2">
                <img class="FirstPhoto" src="/Image/รูปบรรยากาศ/BigRoom/oneBig.png">
            </td>
            <td>
                <img class="Photo" src="/Image/รูปบรรยากาศ/BigRoom/twoBig.png">
            </td>
            <td>
                <img class="Photo" src="/Image/รูปบรรยากาศ/BigRoom/threeBig.png">
            </td>
        </tr>
        <tr>
            <td>
                <img class="Photo" src="/Image/รูปบรรยากาศ/BigRoom/fourBig.png">
            </td>
            <td>
                <img class="Photo" src="/Image/รูปบรรยากาศ/BigRoom/fiveBig.png">
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <a style="font-size:35px">Discription</a><br>
                <a>&emsp;&emsp;Recommented for limit 2 people, price 2,500 Bath/Day</a><br>
                <a style="font-size:27px">Facilities</a><br>
                <ul>
                    <li>
                        WIFI
                    </li>
                    <li>
                        Hair Drier
                    </li>
                    <li>
                        Breakfast
                    </li>
                    <li>
                        Fridge
                    </li>
                    <li>
                        Televistion
                    </li>
                    <li>
                        Daily live items
                    </li>
                </ul>
            </td>
            <td>
                <div class="booking-section">
                    <a>Booking</a><br>
                    <label>RoomNumber:</label>
                    <select class="text-field" id="selected-field-RoomNumberEN" onchange="booking()" required>
                        <option value="" disabled selected>Room Number</option>
                        <option value="300">300</option>
                        <option value="301">301</option>
                        <option value="302">302</option>
                    </select><br>
                    <label>First day:</label>
                    <input class="date-field" id="startDate-fieldEN" type="date" required><br> <!--2025-03-05-->
                    <label>last day:</label>
                    <input class="date-field" id="endDate-fieldEN" type="date" onchange="bookingEN()" required><br> <!--2025-03-05-->
                    <label>total:</label>
                    <a id="total-priceEN"></a><br><br>
                    <a class="button" onclick="checkInputEN()" style="text-decoration: none;">Booking</a>
                </div>
            </td>
        </tr>
    </table>
    <div class="dropdown-box-Full" id="dropdownBox-FullEN">
        <h2>Sorry</h2>
        <h2>This type of room is full.</h2>
        <a class="button" onclick="closeDropdown('dropdownBox-FullEN')">Back to home</a>
    </div>
</div>