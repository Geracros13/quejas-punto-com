import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
let departamento = require('../data/departamento.json'); //Importo los departamentos


// normal usage
<Dropdown
    placeholder="Seleccione un Departamento"
    options={['one', 'two', 'three']}
    value="Departamentos"
    onChange={(value) => console.log('change!', value)}
    onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
    onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
    onOpen={() => console.log('open!')}
/>;

// use the Selection component with other components like popovers etc.
<Selection
    options={['one', 'two', 'three']}
    value="one"
    onChange={(value) => console.log('change!', value)}
/>;
