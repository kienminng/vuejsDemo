// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// Vuetify
import { createVuetify } from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import {aliases , fa} from "vuetify/iconsets/fa";
import 'vuetify/styles'
export default createVuetify(
    {
        icons : {
            defaultSet : 'fa',
            aliases,
            sets : {
                fa
            }
        }
    }
)
