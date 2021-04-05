import { View } from './View';
export class MensagemView extends View<string> {
  template(model: string, type: string = 'info') {
    return `<p class="alert alert-${type}">${model}</p>`
  }

}