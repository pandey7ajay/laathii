
        $(document).ready(() => {

            $("button").click(() => {
                $("p").css("visibility", "visible");
                $("table").css("visibility", "hidden");
                fetchdata();
            });

            const fetchdata = () => {
                fetch("https://jsonplaceholder.typicode.com/todos",{
                    method: "GET",
                    headers: {
                        "Content-Type" : "application/json",
                    }
                })
                .then(data => data.json())
                .then((data) => setheaders(data));
            };

            const setheaders = (data) => {
                $("p").css("visibility", "hidden");
                $("table").css("visibility", "visible");
                var keys = Object.keys(data[0]);
                var heads="";
                for(var i = 0; i<keys.length; i++)  heads += "<th>" + keys[i] + "</th>";
                $("#Theadingrow").html(heads);
                setdata(data, keys);
            };
            
            const setdata = (data, columns) => {
                var pelo = "";
                for(var i = 0; i<data.length; i++)
                { 
                    pelo+="<tr>";
                    for(var j=0; j<columns.length; j++)
                    {
                        pelo+="<td>" + data[i][columns[j]] + "</td>"; 
                    }
                    pelo+="</tr>";
                }
                $("#Tbody").html(pelo);
                $("table").DataTable({
                    ordering: true
                });
            };
        });
