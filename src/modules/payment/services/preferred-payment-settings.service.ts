import { Injectable, NotFoundException } from '@nestjs/common';
import { PreferredPaymentSettingsRepository } from '../repositories/preferred-payment-settings.repository';

@Injectable()
export class PreferredPaymentSettingsService {
  constructor(private readonly settingsRepository: PreferredPaymentSettingsRepository) {}

  async getCustomerSettings(customerId: string) {
    const settings = await this.settingsRepository.findByCustomerId(customerId);
    if (!settings) throw new NotFoundException('Customer payment settings not found');
    return settings;
  }
}
