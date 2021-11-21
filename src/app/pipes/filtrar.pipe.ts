import { Pipe, PipeTransform } from '@angular/core';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value:any[], param:string, campo:string): any {
    if(!param || param.trim()===''){
    return value;
  }
  if(!value){
    return null;
  }
  param = param.toLowerCase();
  return value.filter(item =>
    item[campo].toLowerCase().includes(param)
    );
  }
}
