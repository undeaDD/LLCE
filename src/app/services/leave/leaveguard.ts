import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { CheckComponent } from "src/app/check/check.component";
import { ExamComponent } from "src/app/exam/exam.component";

@Injectable()
export class LeaveGuard implements CanDeactivate<CheckComponent | ExamComponent> {
  canDeactivate(component: CheckComponent | ExamComponent): boolean {
    if (component.isFinished) {
        return true;
    } else {
        return confirm("Willst du die Prüfung wirklich ohne Ergebnis abbrechen? Dabei gehen alle Daten verloren.");
    }
  }
}