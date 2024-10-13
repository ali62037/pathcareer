console.log("hello")
let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
let menumob = document.getElementById("menumob");
let body = document.body
const coursesAfterPCM = ["B.Tech / B.E.","B.Arch","BCA","B.Sc. in IT / CS","B.Sc.","Integrated M.Sc.","B.Stat / B.Math","B.Sc. in Aviation","Commercial Pilot Training","B.Sc. in Nautical Science","Marine Engineering","NDA","B.Des","B.F.Tech","BBA","B.Sc. in Data Science","Hotel Management","Law (5-Year Integrated LLB)","B.Pharm"];
const coursesAfterPCB = [
    "B.Sc. Nursing",
    "B.Sc. Biotech",
    "B.Sc. Micro",
    "B.Sc. Env. Science",
    "B.Sc. Agri.",
    "B.Sc. Zoology",
    "B.Sc. Bio.",
    "B.Sc. Life Sci.",
    "BDS",
    "MBBS",
    "BAMS",
    "BHMS",
    "BPT",
    "B.Sc. Radiology",
    "B.Sc. Optometry",
    "B.Sc. Nutrition",
    "B.Sc. Forensic Sci.",
    "B.Sc. Cardiac Tech.",
    "B.Sc. Med. Lab Tech.",
    "B.Sc. Occ. Therapy",
    "B.Sc. Perfusion Tech.",
    "B.Sc. Clinical Psych."
];

const coursesAfterPCMandPCB = [
    // Courses after PCB
    "B.Sc. Nursing",
    "B.Sc. Biotech",
    "B.Sc. Micro",
    "B.Sc. Env. Sci.",
    "B.Sc. Agri.",
    "B.Sc. Zool.",
    "B.Sc. Bio.",
    "B.Sc. Life Sci.",
    "BDS",                     // Dental Surgery
    "MBBS",                    // Medicine
    "BAMS",                    // Ayurvedic Medicine
    "BHMS",                    // Homeopathic Medicine
    "BPT",                     // Physiotherapy
    "B.Sc. Radiology",
    "B.Sc. Optom.",            // Optometry
    "B.Sc. Nutrition",
    "B.Sc. Forensic Sci.",
    "B.Sc. Cardiac Tech.",
    "B.Sc. Med. Lab Tech.",
    "B.Sc. Occ. Therapy",
    "B.Sc. Perfusion Tech.",
    "B.Sc. Clinical Psych.",

    // Courses after PCM
    "B.Tech",                  // Technology
    "B.Arch",                  // Architecture
    "B.Sc. Comp. Sci.",        // Computer Science
    "BCA",                     // Computer Applications
    "B.Sc. Math.",             // Mathematics
    "B.Sc. Stats.",            // Statistics
    "B.Sc. Physics",           // Physics
    "B.Sc. Chem.",             // Chemistry
    "B.Sc. IT",                // Information Technology
    "B.Sc. Data Sci.",         // Data Science
    "B.Sc. AI"                 // Artificial Intelligence
];

const coursesAfterCommerce = [
    "B.Com",                     // Commerce
    "BBA",                       // Business Administration
    "BMS",                       // Management Studies
    "CA",                        // Chartered Accountant
    "CMA",                       // Cost Management Accountant
    "CS",                        // Company Secretary
    "B.Sc. Hosp. Mgmt.",        // Hospitality Management
    "B.A. Eco.",                // Economics
    "B.A. Bus. Eco.",           // Business Economics
    "B.Com (Hons)",             // Commerce (Honors)
    "MBA",                       // Business Administration
    "M.Com",                     // Commerce
    "PGDM",                      // Diploma in Management
    "M.A. Eco.",                // Arts in Economics
    "BCA",                       // Computer Applications
    "B.Sc. IT",                 // Information Technology
    "Dip. Fin. Mgmt.",          // Financial Management
    "Dip. Bank & Fin.",         // Banking and Finance
    "Dip. Bus. Mgmt."           // Business Management
];

const coursesAfterArts = [
    "B.A.",                      // Arts
    "BFA",                       // Fine Arts
    "B.Des",                     // Design
    "B.Mus",                     // Music
    "B.VA",                      // Visual Arts
    "B.P.Ed",                    // Physical Education
    "M.A.",                      // Arts
    "MFA",                       // Fine Arts
    "M.Des",                     // Design
    "M.Mus",                     // Music
    "MBA",                       // Business Administration
    "B.Ed",                      // Education
    "PG Dip. in Fine Arts",     // Post Graduate Diploma in Fine Arts
    "PG Dip. in Arts",          // Post Graduate Diploma in Arts
    "Dip. in Animation",         // Animation
    "Dip. in Int. Design",      // Interior Design
    "Dip. in Fashion Design"     // Fashion Design
];

const coursesAfterITI = [
    "Dip. in Engg.",                     // Engineering
    "B.Tech / B.E.",                     // Technology / Engineering
    "B.Sc. Mech. Engg.",                 // Mechanical Engineering
    "B.Sc. Elec. Engg.",                 // Electrical Engineering
    "B.Sc. Civ. Engg.",                  // Civil Engineering
    "B.Sc. Comp. Sci.",                  // Computer Science
    "B.Sc. IT",                          // Information Technology
    "B.Sc. Electronics",                 // Electronics
    "B.Com",                             // Commerce
    "MBA",                               // Business Administration
    "MCA",                               // Computer Applications
    "Adv. Dip. in Engg.",               // Advanced Diploma in Engineering
    "Dip. in Hotel Mgmt.",               // Hotel Management
    "Dip. in Fashion Design",            // Fashion Design
    "Dip. in Graphic Design",            // Graphic Designing
    "Dip. in Web Design",                // Web Designing
    "Dip. in Int. Design"                // Interior Design
];


let btn = document.getElementById("btn"); 
let result = document.getElementById("result");
let reset = document.getElementById("reset")



btn.addEventListener("click", function(){
        selectElement1 = document.getElementById("ten");
        selectElement2 = document.getElementById("pcm");
        output = selectElement1.value+selectElement2.value;
        console.log(output);

        if (output == "10pcm"){
            

            // 
            Array.from(coursesAfterPCM).forEach(course => {
                // Create a new div element
                let div = document.createElement('div');
                div.id = 'div';
                
                // Set the text content to the course name
                div.textContent = course;
                
                // Optionally, add some styling to the div
                div.style.border = "2px solid #A755C2";
                div.style.padding = "8px";
                div.style.margin = "8px";
                div.style.borderRadius = "89% 11% 85% 15% / 21% 85% 15% 79%";
                div.style.height = "7vh";
                // div.style.width = "22%"
                div.style.display = "flex";
                div.style.justifyContent = "center";
                div.style.alignItems = "center";
                
                // Step 3: Append the div to the container
                result.appendChild(div);
                selectElement1.style.display = "none";
                selectElement2.style.display ="none";
                btn.style.display = "none";
                reset.style.display ="inline";
            });

        }else if (output == "10pcb") {



                Array.from(coursesAfterPCB).forEach(course => {
                // Create a new div element
                const div = document.createElement('div');
                div.id = 'div';
                // Set the text content to the course name
                div.textContent = course;
                
                // Optionally, add some styling to the div
                div.style.border = "2px solid #A755C2";
                div.style.padding = "8px";
                div.style.margin = "8px";
                div.style.borderRadius = "89% 11% 85% 15% / 21% 85% 15% 79%";
                div.style.height = "7vh";
            
                // div.style.width = "22%"
                div.style.display = "flex";
                div.style.justifyContent = "center";
                div.style.alignItems = "center";
                
                // Step 3: Append the div to the container
                result.appendChild(div);
                selectElement1.style.display = "none";
                selectElement2.style.display ="none";
                btn.style.display = "none";
                reset.style.display ="inline";
            });
            
            
        }else if(output == "10pcm/pcb"){
            
            Array.from(coursesAfterPCMandPCB).forEach(course => {
                // Create a new div element
                const div = document.createElement('div');
                div.id = 'div';
                // Set the text content to the course name
                div.textContent = course;
                
                // Optionally, add some styling to the div
                div.style.border = "2px solid #A755C2";
                div.style.padding = "8px";
                div.style.margin = "8px";
                div.style.borderRadius = "89% 11% 85% 15% / 21% 85% 15% 79%";
                div.style.height = "7vh";
                // div.style.width = "22%"
                div.style.display = "flex";
                div.style.justifyContent = "center";
                div.style.alignItems = "center";
                
                // Step 3: Append the div to the container
                result.appendChild(div);
                selectElement1.style.display = "none";
                selectElement2.style.display ="none";
                btn.style.display = "none";
                reset.style.display ="inline";
            });
        }else if (output == "10Commerce") {



            Array.from(coursesAfterCommerce).forEach(course => {
            // Create a new div element
            const div = document.createElement('div');
            div.id = 'div';
            // Set the text content to the course name
            div.textContent = course;
            
            // Optionally, add some styling to the div
            div.style.border = "2px solid #A755C2";
            div.style.padding = "8px";
            div.style.margin = "8px";
            div.style.borderRadius = "89% 11% 85% 15% / 21% 85% 15% 79%";
            div.style.height = "7vh";
            // div.style.width = "22%"
            div.style.display = "flex";
            div.style.justifyContent = "center";
            div.style.alignItems = "center";
            
            // Step 3: Append the div to the container
            result.appendChild(div);
            selectElement1.style.display = "none";
            selectElement2.style.display ="none";
            btn.style.display = "none";
            reset.style.display ="inline";
        });
        
        
    }else if(output == "10Arts"){
            
        Array.from(coursesAfterArts).forEach(course => {
            // Create a new div element
            const div = document.createElement('div');
            div.id = 'div';
            // Set the text content to the course name
            div.textContent = course;
            
            // Optionally, add some styling to the div
            div.style.border = "2px solid #A755C2";
            div.style.padding = "8px";
            div.style.margin = "8px";
            div.style.borderRadius = "89% 11% 85% 15% / 21% 85% 15% 79%";
            div.style.height = "7vh";
            // div.style.width = "22%"
            div.style.display = "flex";
            div.style.justifyContent = "center";
            div.style.alignItems = "center";
            
            // Step 3: Append the div to the container
            result.appendChild(div);
            selectElement1.style.display = "none";
            selectElement2.style.display ="none";
            btn.style.display = "none";
            reset.style.display ="inline";
        });
    }else if (output == "10ITI") {



                Array.from(coursesAfterITI).forEach(course => {
                // Create a new div element
                const div = document.createElement('div');
                div.id = 'div';
                // Set the text content to the course name
                div.textContent = course;
                
                // Optionally, add some styling to the div
                div.style.border = "2px solid #A755C2";
                div.style.padding = "8px";
                div.style.margin = "8px";
                div.style.borderRadius = "89% 11% 85% 15% / 21% 85% 15% 79%";
                div.style.height = "7vh";
                // div.style.width = "22%"
                div.style.display = "flex";
                div.style.justifyContent = "center";
                div.style.alignItems = "center";
                
                // Step 3: Append the div to the container
                result.appendChild(div);
                selectElement1.style.display = "none";
                selectElement2.style.display ="none";
                btn.style.display = "none";
                reset.style.display ="inline";
                
            });
            
            
        }
       
})

menu.addEventListener("click", function(){
    menu.style.display = "none";
    cross.style.display = "inline";
    menumob.style.display = "inline";
    body.style.overflow = "hidden";

})

cross.addEventListener("click", function(){
    cross.style.display = "none";
    menu.style.display = "inline"
    menumob.style.display = "none"
    body.style.overflow = "auto";
})



reset.addEventListener("click", function(){
    location.reload()
})