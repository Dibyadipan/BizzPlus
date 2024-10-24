// Current step counters for manufacturer and distributor
let currentStepManufacturer = 1;
let currentStepDistributor = 1;

// Progress bar steps for both forms
const steps = 4;

// Switch between Manufacturer and Distributor forms
document.getElementById('manufacturerBtn').addEventListener('click', () => {
    document.getElementById('manufacturerForm').style.display = 'block';
    document.getElementById('distributorForm').style.display = 'none';
    resetForm('manufacturer');
});

document.getElementById('distributorBtn').addEventListener('click', () => {
    document.getElementById('manufacturerForm').style.display = 'none';
    document.getElementById('distributorForm').style.display = 'block';
    resetForm('distributor');
});

// Go to next step in the form
function nextStep(userType, step) {
    let currentStep;
    if (userType === 'manufacturer') {
        currentStep = currentStepManufacturer;
    } else {
        currentStep = currentStepDistributor;
    }

    if (step < steps) {
        document.getElementById(`${userType}Step${currentStep}`).classList.remove('active-step');
        currentStep++;
        document.getElementById(`${userType}Step${currentStep}`).classList.add('active-step');

        if (userType === 'manufacturer') {
            currentStepManufacturer = currentStep;
        } else {
            currentStepDistributor = currentStep;
        }

        updateProgressBar(currentStep);
    }
}

// Update the progress bar
function updateProgressBar(step) {
    const progress = (step / steps) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

// Reset the form for manufacturer or distributor when switching
function resetForm(userType) {
    if (userType === 'manufacturer') {
        currentStepManufacturer = 1;
        document.querySelectorAll('.timeline-step').forEach(step => step.classList.remove('active-step'));
        document.getElementById('manufacturerStep1').classList.add('active-step');
    } else {
        currentStepDistributor = 1;
        document.querySelectorAll('.timeline-step').forEach(step => step.classList.remove('active-step'));
        document.getElementById('distributorStep1').classList.add('active-step');
    }

    updateProgressBar(1);
}
