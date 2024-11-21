import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import DescriptionScreen from "./src/screens/DescriptionScreen";
import SponsoredLegislation from "./src/screens/SponsoredLegislation";
import CoSponsoredLegislation from "./src/screens/CoSponsoredLegislation";
import RepScreen from "./src/screens/RepScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  RepScreen: RepScreen,
  Description: DescriptionScreen,
  Sponsored: SponsoredLegislation,
  CoSponsored: CoSponsoredLegislation
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Who Rep's Me US?",
  },
}
)

export default createAppContainer(navigator);