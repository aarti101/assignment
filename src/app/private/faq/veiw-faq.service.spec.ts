import { TestBed } from '@angular/core/testing';

import { VeiwFaqService } from './veiw-faq.service';

describe('VeiwFaqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeiwFaqService = TestBed.get(VeiwFaqService);
    expect(service).toBeTruthy();
  });
});
