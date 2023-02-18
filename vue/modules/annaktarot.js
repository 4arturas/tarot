import Card from './Card.js';
export default {
    components: {
        Card
    },
    template: `
<v-app>
    <v-card class="mx-auto" append-icon="mdi-human-greeting" width="80%" style="margin: 20px">
      <template v-slot:title>        
        <table>
            <tbody>
                <tr>
                    <td><router-link to="/" style="text-decoration: none; color:black;">AnnaK Tarot</router-link>&nbsp;&nbsp;&nbsp;</td>
                    <td><router-link to="/about">Go to About</router-link></td>
                </tr>
            </tbody>
        </table>
      </template>
      <v-card-text>
        <router-view></router-view>        
      </v-card-text>
    </v-card>
</v-app>
`
}