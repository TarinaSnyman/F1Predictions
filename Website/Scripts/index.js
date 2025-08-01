//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior
        const targetId = this.getAttribute('href').substring(1); // Get the id (e.g., "footer")
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start' // Align the top of the element with the top of the viewport
            });
        }
    });
});

document.addEventListener("DOMContentLoaded",function(){
    LoadCricuits();
    LoadDrivers();
    LoadTeams();
})

LoadCricuits=()=>{
   const dropdownCircuit=document.querySelectorAll(".circuits");

    fetch("../JsonFiles/circuits.json").then(response=>{
        if(!response.ok){
            throw new Error("Failed to load JSON");
        }
        return response.json();

    })
    .then(data=>{
        dropdownCircuit.innerHTML="";
        const defaultOption=document.createElement("option");
        defaultOption.text="Select a circuit";
        defaultOption.value="";
        dropdownCircuit.add(defaultOption);
        data.forEach(circuit=>{
            const option=document.createElement("option");
            option.value=circuit.id;
            option.text=circuit.name;
            dropdownCircuit.add(option);
        });
    })
    .catch(error=>{
        console.error("Error fetching JSON:",error);
        dropdownCircuit.innerHTML="<option>Error loading options</option>";
    }) 
};

LoadDrivers=()=>{
    const dropdownDriver=document.querySelectorAll(".drivers");

    fetch("../JsonFiles/drivers.json").then(response=>{
        if(!response.ok){
            throw new Error("Failed to load JSON");
        }
        return response.json();

    })
    .then(data=>{
        dropdownDriver.innerHTML="";
        const defaultOption=document.createElement("option");
        defaultOption.text="Select a driver";
        defaultOption.value="";
        dropdownDriver.add(defaultOption);
        data.forEach(driver=>{
            const option=document.createElement("option");
            option.value=driver.id;
            option.text=driver.name;
            dropdownDriver.add(option);
        });
    })
    .catch(error=>{
        console.error("Error fetching JSON:",error);
        dropdownDriver.innerHTML="<option>Error loading options</option>";
    }) 
};

LoadTeams=()=>{
    const dropdownTeam=document.querySelectorAll(".teams");
    fetch("../JsonFiles/teams.json").then(response=>{
        if(!response.ok){
            throw new Error("Failed to load JSON");
        }
        return response.json();
    })
    .then(data=>{
        dropdownTeam.innerHTML="";
        const defaultOption=document.createElement("option");
        defaultOption.text="Select a team";
        defaultOption.value="";
        dropdownTeam.add(defaultOption);
        data.forEach(team=>{
            const option=document.createElement("option");
            option.value=team.id;
            option.text=team.name;
            dropdownTeam.add(option);
        });
    })
    .catch(error=>{
        console.error("Error fetching JSON:",error);
        dropdownTeam.innerHTML="<option>Error loading options</option>";
    }) 
};

