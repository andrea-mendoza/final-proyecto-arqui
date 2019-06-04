import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports:
    [
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatTabsModule,
        MatRadioModule,
        MatCheckboxModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatExpansionModule,
        MatGridListModule
        ],
    exports:
    [
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatTabsModule,
        MatRadioModule,
        MatCheckboxModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatExpansionModule,
        MatGridListModule
    ],
})
export class Material {}
