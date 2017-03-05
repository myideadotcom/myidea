/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IdeasService } from './ideas.service';

describe('IdeasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdeasService]
    });
  });

  it('should ...', inject([IdeasService], (service: IdeasService) => {
    expect(service).toBeTruthy();
  }));
});
