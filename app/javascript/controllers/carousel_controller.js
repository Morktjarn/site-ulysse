import { Controller } from "@hotwired/stimulus"
import 'owl.carousel';

export default class extends Controller {
  connect() {
    console.log("Activating carousel");
    this.element.owlCarousel();
  }
}
