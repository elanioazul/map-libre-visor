import { Component, inject } from '@angular/core';
import { TocgeocatalogService } from '../../services/tocgeocatalog.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-toc',
  standalone: true,
  imports: [CheckboxModule, FormsModule, CommonModule, ButtonModule],
  templateUrl: './toc.component.html',
  styleUrl: './toc.component.scss'
})
export class TocComponent {
  selectedNodes: any[] = [];

  tocGeocatalogService = inject(TocgeocatalogService);

  nodesInToc = this.tocGeocatalogService.nodesInToc();

}
