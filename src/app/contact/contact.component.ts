import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContactService } from '../contact.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule ,RouterLink,RouterLinkActive,RouterOutlet,NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private contactService: ContactService,private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      societe: [''],
      tel: [''],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', Validators.required],
      objet: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(6)]],
      // Ajoutez d'autres champs ici...
    });

    
  }
  
  ngOnInit() {
    
  }
  onSubmit() {
    if (this.contactForm.invalid) {
      return
    } else {
      console.log(this.contactForm.value)
      let formData = {
        societe: this.contactForm.value.societe,
        nom: this.contactForm.value.nom,
        prenom: this.contactForm.value.prenom,
        email: this.contactForm.value.email,
        tel: this.contactForm.value.tel,
        objet: this.contactForm.value.objet,
        message: this.contactForm.value.message
      };
      this.contactService.sendContactForm(formData).subscribe(
        () => {
          console.log('Formulaire de contact envoyé avec succès');
          alert('Message Envoyé');
          this.contactForm = this.formBuilder.group({
            societe: [''],
            nom: ['', [Validators.required]],
            prenom: ['', [Validators.required]],
            email: ['', [Validators.required]],
            tel: [''],
            objet: ['', [Validators.required]],
            message: ['', [Validators.required, Validators.minLength(6)]]
          });
          // Réinitialiser le formulaire ou afficher un message de confirmation
        },
        (error) => {
          console.error('Erreur lors de l\'envoi du formulaire de contact', error);
        }
      );
    }
   
  }
}
