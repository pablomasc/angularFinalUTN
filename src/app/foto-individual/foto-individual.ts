import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { imagenInterface } from '../services/apiget';

@Component({
  selector: 'app-foto-individual',
  imports: [RouterLink],
  templateUrl: './foto-individual.html',
  styleUrl: './foto-individual.css'
})
export class FotoIndividual {

  @Input() imagen!: imagenInterface;


}
