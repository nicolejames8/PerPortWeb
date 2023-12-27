document.addEventListener("DOMContentLoaded", function () {
    // Hide all sections on initial load
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the "About Me" section by default
    const defaultSection = document.getElementById('about');
    if (defaultSection) {
        defaultSection.style.display = 'flex';
    }
});

let showImage = false;

function toggleImage() {
    const imageContainer = document.getElementById('imageContainer');
    const meButton = document.getElementById('meButton');

    if (!showImage) {
        imageContainer.innerHTML = `
            <img id="profileImage" src="profile.jpg" alt="" style="max-width: 30%; border: 2px solid #333; border-radius: 10px; opacity: 1;">
            <p style="font-size: 18px; font-weight: bold; margin-top: 10px; text-align: center;">YEP! THAT'S ME</p>
        `;
        meButton.innerText = 'GO BACK';
        meButton.style.marginLeft = 'auto'; 
        meButton.style.marginRight = '10px'; 
    } else {
        imageContainer.innerHTML = '';
        meButton.innerText = 'CLICK ME';
        meButton.style.marginLeft = '0';
        meButton.style.marginRight = '0';
    }

    showImage = !showImage;
}

let isSketch = true;
let isCRUD = true;

function toggleSketchUpImage() {
    // Function for Sketch and Up Images
    const sketchPanel = document.querySelectorAll('.project-panel')[0];
    const upPanel = document.querySelectorAll('.project-panel')[1];
    const crudPanel = document.querySelectorAll('.project-panel')[2];
    const javaPanel = document.querySelectorAll('.project-panel')[3];

    sketchPanel.style.display = isSketch ? 'none' : 'inline-block';
    upPanel.style.display = isSketch ? 'inline-block' : 'none';

    crudPanel.style.display = 'inline-block';
    javaPanel.style.display = 'none';

    isSketch = !isSketch;
}

function toggleCRUDJavaImage() {
    // Function for CRUD and Java Images
    const crudPanel = document.querySelectorAll('.project-panel')[2];
    const javaPanel = document.querySelectorAll('.project-panel')[3];

    crudPanel.style.display = isCRUD ? 'none' : 'inline-block';
    javaPanel.style.display = isCRUD ? 'inline-block' : 'none';

    isCRUD = !isCRUD;
}

let isDrawerOpen = false;
function toggleDrawer() {
    const drawer = document.querySelector('.drawer');
    drawer.style.display = drawer.style.display === 'flex' ? 'none' : 'flex';
}



let isLogic = true;
let isCircuit = true;

function toggleLogicImage() {
    const logicPanel = document.querySelectorAll('.project-panel')[4];
    const circuitPanel = document.querySelectorAll('.project-panel')[5];

    logicPanel.style.display = isLogic ? 'none' : 'inline-block';
    circuitPanel.style.display = isLogic ? 'inline-block' : 'none';

    isLogic = !isLogic;
}

function toggleCircuitImage() {
    const logicPanel = document.querySelectorAll('.project-panel')[4];
    const circuitPanel = document.querySelectorAll('.project-panel')[5];

    circuitPanel.style.display = isCircuit ? 'none' : 'inline-block';
    logicPanel.style.display = isCircuit ? 'inline-block' : 'none';

    isCircuit = !isCircuit;
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'flex';
    }
}
