function attachEventsListeners() {
    const daysButton = document.getElementById('daysBtn');
    const hoursButton = document.getElementById('hoursBtn');
    const minutesButton = document.getElementById('minutesBtn');
    const secondsButton = document.getElementById('secondsBtn');

    const daysValue = document.getElementById('days');
    const hoursValue = document.getElementById('hours');
    const minutesValue = document.getElementById('minutes');
    const secondsValue = document.getElementById('seconds');

    const buttons = [daysButton, hoursButton, minutesButton, secondsButton];
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button == daysButton) {
                const days = daysValue.value;
                hoursValue.value = days * 24;
                minutesValue.value = hoursValue.value * 60;
                secondsValue.value = minutesValue.value * 60
            } else if (button == hoursButton) {
                const hours = hoursValue.value;
                daysValue.value = hours / 24;
                minutesValue.value = hours * 60;
                secondsValue.value = minutesValue.value * 60;
            } else if (button == minutesButton) {
                const minutes = minutesValue.value;
                daysValue.value = minutes / 60 / 24;
                hoursValue.value = minutes / 60;
                secondsValue.value = minutes * 60;
            } else if (button == secondsButton) {
                const seconds = secondsValue.value;
                daysValue.value = seconds / 60 / 60 / 24;
                hoursValue.value = seconds / 60 / 60;
                minutesValue.value = seconds / 60;
            }
        })
    })
}