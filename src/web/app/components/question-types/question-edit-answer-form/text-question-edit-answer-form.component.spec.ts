import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { TextQuestionEditAnswerFormComponent } from './text-question-edit-answer-form.component';
import { RichTextEditorModule } from '../../rich-text-editor/rich-text-editor.module';

describe('TextQuestionEditAnswerFormComponent', () => {
  let component: TextQuestionEditAnswerFormComponent;
  let fixture: ComponentFixture<TextQuestionEditAnswerFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TextQuestionEditAnswerFormComponent],
      imports: [
        FormsModule,
        RichTextEditorModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextQuestionEditAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
