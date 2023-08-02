import { TestBed } from '@angular/core/testing';

import { MinimalChatServiceService } from './minimal-chat-service.service';

describe('MinimalChatServiceService', () => {
  let service: MinimalChatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimalChatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
