import {App} from "vue";
import Card from "@/components/Card/Card.vue";
import PlayerSlider from "@/components/Player/PlayerSlider.vue";
import Menu from "@/components/Menu/Menu.vue";


const register =  {
	install: (app: App) => {
		app.component(PlayerSlider.__name as string, PlayerSlider)
		app.component(Card.__name as string, Card)
		app.component(Menu.__name as string, Menu)
	}
}
export default register
