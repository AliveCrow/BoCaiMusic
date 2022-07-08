import {App} from "vue";
import Card from "@/components/Card/Card.vue";
import PlayerSlider from "@/components/Player/PlayerSlider.vue";


const register =  {
	install: (app: App) => {
		app.component(PlayerSlider.__name as string, PlayerSlider)
		app.component(Card.__name as string, Card)
	}
}
export default register
