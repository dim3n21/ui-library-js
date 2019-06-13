import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';


//create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create a dropdown

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach( instance => {
    const dropdown = new Dropdown(instance);
    dropdown.init();
})