// import Card from './Card.js';
export default {
    components: {
        // Card
    },
    template: `
<v-app>
    <v-card class="mx-auto" append-icon="mdi-human-greeting" width="80%" style="margin: 20px">
      <template v-slot:title>        
        <table>
            <tbody>
                <tr>
                    <td style="padding-left: 20px"><router-link to="/" style="text-decoration: none; color:black;">Storyteller Tactics</router-link>&nbsp;&nbsp;&nbsp;</td>
                    <td style="padding-left: 20px"><router-link to="/tactics">Tactics</router-link></td>
                    <td style="padding-left: 20px"><router-link to="/system">System</router-link></td>
                    <td style="padding-left: 20px"><router-link to="/about">About</router-link></td>
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