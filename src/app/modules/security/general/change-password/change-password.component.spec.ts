import {ComponentFixture, TestBed} from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChangePasswordComponent} from './change-password.component';
declare const GenerarVentanaModal: any;

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangePasswordComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

   /* ngOnInit(): void {
      this.ConstruccionFormulario();
    }

    ConstruccionFormulario(){
      this.formularioChange = this.fb.group({
        email: ["", [Validators.required, Validators.email]],
      });
    }
    Change(){
      if (this.formularioChange.invalid) {
        GenerarVentanaModal("Todos los Campos son Requeridos");
        this.mostrar = false;
      } else {
        GenerarVentanaModal("Válidando los Datos Suministrados");
      }
    }*/

  });


