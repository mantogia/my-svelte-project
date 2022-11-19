// Pages
import Feedback from "./pages/Feedback.svelte";
import Nahrungsmittel from "./pages/Nahrungsmittel.svelte";


// Export the route defintion object

export default {

    '/': Feedback,
    '/feedback': Feedback,
    '/nahrungsmittel': Nahrungsmittel
}