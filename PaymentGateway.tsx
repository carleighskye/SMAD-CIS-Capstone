import { useState } from 'react';
import { CreditCard, Smartphone, Building2, DollarSign, Lock, CheckCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface PaymentGatewayProps {
  bookingData: any;
  amount: number;
  onComplete?: (data: any) => void;
  onBack?: () => void;
}

type PaymentMethod = 'credit-card' | 'paypal' | 'mobile-money' | 'bank-transfer';

export default function PaymentGateway({ bookingData, amount, onComplete, onBack }: PaymentGatewayProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('credit-card');
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const [creditCardData, setCreditCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const [paypalData, setPaypalData] = useState({
    email: ''
  });

  const [mobileMoneyData, setMobileMoneyData] = useState({
    provider: 'M-Pesa',
    phoneNumber: ''
  });

  const [bankTransferData, setBankTransferData] = useState({
    accountName: '',
    accountNumber: '',
    bankName: ''
  });

  const paymentMethods = [
    {
      id: 'credit-card' as PaymentMethod,
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Pay securely with your card'
    },
    {
      id: 'paypal' as PaymentMethod,
      name: 'PayPal',
      icon: DollarSign,
      description: 'Fast and secure PayPal payments'
    },
    {
      id: 'mobile-money' as PaymentMethod,
      name: 'Mobile Money',
      icon: Smartphone,
      description: 'M-Pesa, Tigo Pesa, Airtel Money'
    },
    {
      id: 'bank-transfer' as PaymentMethod,
      name: 'Bank Transfer',
      icon: Building2,
      description: 'Direct bank transfer'
    }
  ];

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted.slice(0, 19); // 16 digits + 3 spaces
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    return cleaned;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingData?.bookingId) {
      alert('Invalid booking data. Please go back and complete the booking process.');
      return;
    }

    setLoading(true);

    try {
      let paymentDetails = {};
      
      switch (selectedMethod) {
        case 'credit-card':
          if (!creditCardData.cardNumber || !creditCardData.cardName || !creditCardData.expiryDate || !creditCardData.cvv) {
            alert('Please fill in all credit card fields');
            setLoading(false);
            return;
          }
          paymentDetails = {
            last4: creditCardData.cardNumber.slice(-4),
            cardName: creditCardData.cardName,
            expiryDate: creditCardData.expiryDate
          };
          break;
        case 'paypal':
          if (!paypalData.email) {
            alert('Please enter your PayPal email');
            setLoading(false);
            return;
          }
          paymentDetails = { email: paypalData.email };
          break;
        case 'mobile-money':
          if (!mobileMoneyData.phoneNumber) {
            alert('Please enter your phone number');
            setLoading(false);
            return;
          }
          paymentDetails = {
            provider: mobileMoneyData.provider,
            phoneNumber: mobileMoneyData.phoneNumber
          };
          break;
        case 'bank-transfer':
          if (!bankTransferData.accountName || !bankTransferData.accountNumber || !bankTransferData.bankName) {
            alert('Please fill in all bank transfer fields');
            setLoading(false);
            return;
          }
          paymentDetails = bankTransferData;
          break;
      }

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-a628c144/payments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            bookingId: bookingData.bookingId,
            amount,
            paymentMethod: selectedMethod,
            paymentDetails
          }),
        }
      );

      const data = await response.json();
      
      if (data.success) {
        setPaymentSuccess(true);
        setTimeout(() => {
          if (onComplete) {
            onComplete({
              ...bookingData,
              paymentId: data.payment.id,
              transactionId: data.payment.transactionId,
              paymentMethod: selectedMethod,
              amount
            });
          }
        }, 2000);
      } else {
        alert(data.error || 'Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment processing failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center w-full min-h-[400px]">
        <div className="flex flex-col items-center gap-[24px]">
          <div className="w-[80px] h-[80px] rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-[48px] h-[48px] text-green-600" />
          </div>
          <div className="flex flex-col items-center gap-[12px]">
            <p className="font-['Volkhov:Bold',sans-serif] text-[32px] text-gray-950">
              Payment Successful!
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#5e6282] text-center">
              Your booking has been confirmed. You will receive a confirmation email shortly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
        <p className="font-['Volkhov:Bold',sans-serif] leading-[45px] not-italic text-[36px] text-gray-950">
          Secure Payment
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#5e6282] text-[18px]">
          Complete your booking with a secure payment. Your information is encrypted and protected.
        </p>
      </div>

      {/* Amount Summary */}
      <div className="w-full bg-gray-50 rounded-[12px] p-[24px] border border-gray-200">
        <div className="flex justify-between items-center">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[20px] text-black">
            Total Amount
          </p>
          <p className="font-['Volkhov:Bold',sans-serif] text-[32px] text-[#181e4b]">
            ${amount.toLocaleString()}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[32px] items-start w-full">
        {/* Payment Method Selection */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          <label className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-black">
            Select Payment Method
          </label>
          <div className="grid grid-cols-2 gap-[16px] w-full">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-[20px] rounded-[12px] border-2 transition-all text-left ${
                    selectedMethod === method.id
                      ? 'border-[#181e4b] bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-[12px]">
                    <Icon className={`w-6 h-6 mt-1 ${selectedMethod === method.id ? 'text-[#181e4b]' : 'text-gray-600'}`} />
                    <div className="flex flex-col gap-[4px]">
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                        {method.name}
                      </p>
                      <p className="text-[14px] text-[#5e6282]">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Payment Form Fields */}
        <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
          {selectedMethod === 'credit-card' && (
            <>
              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                  Card Number
                </label>
                <input
                  type="text"
                  required
                  value={creditCardData.cardNumber}
                  onChange={(e) => setCreditCardData({ ...creditCardData, cardNumber: formatCardNumber(e.target.value) })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  required
                  value={creditCardData.cardName}
                  onChange={(e) => setCreditCardData({ ...creditCardData, cardName: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                  placeholder="John Doe"
                />
              </div>

              <div className="content-stretch flex gap-[16px] items-start w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start flex-1">
                  <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    required
                    value={creditCardData.expiryDate}
                    onChange={(e) => setCreditCardData({ ...creditCardData, expiryDate: formatExpiryDate(e.target.value) })}
                    className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>

                <div className="content-stretch flex flex-col gap-[8px] items-start flex-1">
                  <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                    CVV
                  </label>
                  <input
                    type="text"
                    required
                    value={creditCardData.cvv}
                    onChange={(e) => setCreditCardData({ ...creditCardData, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                    className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>
            </>
          )}

          {selectedMethod === 'paypal' && (
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
              <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                PayPal Email Address
              </label>
              <input
                type="email"
                required
                value={paypalData.email}
                onChange={(e) => setPaypalData({ email: e.target.value })}
                className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                placeholder="your.email@example.com"
              />
            </div>
          )}

          {selectedMethod === 'mobile-money' && (
            <>
              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                  Mobile Money Provider
                </label>
                <select
                  value={mobileMoneyData.provider}
                  onChange={(e) => setMobileMoneyData({ ...mobileMoneyData, provider: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                >
                  <option value="M-Pesa">M-Pesa</option>
                  <option value="Tigo Pesa">Tigo Pesa</option>
                  <option value="Airtel Money">Airtel Money</option>
                  <option value="Halo Pesa">Halo Pesa</option>
                </select>
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={mobileMoneyData.phoneNumber}
                  onChange={(e) => setMobileMoneyData({ ...mobileMoneyData, phoneNumber: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                  placeholder="+255 766 437 358"
                />
              </div>
            </>
          )}

          {selectedMethod === 'bank-transfer' && (
            <>
              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                  Account Name
                </label>
                <input
                  type="text"
                  required
                  value={bankTransferData.accountName}
                  onChange={(e) => setBankTransferData({ ...bankTransferData, accountName: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                  placeholder="John Doe"
                />
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                  Account Number
                </label>
                <input
                  type="text"
                  required
                  value={bankTransferData.accountNumber}
                  onChange={(e) => setBankTransferData({ ...bankTransferData, accountNumber: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                  placeholder="1234567890"
                />
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                  Bank Name
                </label>
                <input
                  type="text"
                  required
                  value={bankTransferData.bankName}
                  onChange={(e) => setBankTransferData({ ...bankTransferData, bankName: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                  placeholder="CRDB Bank"
                />
              </div>
            </>
          )}
        </div>

        {/* Security Notice */}
        <div className="w-full bg-blue-50 rounded-[8px] p-[16px] border border-blue-200">
          <div className="flex items-start gap-[12px]">
            <Lock className="w-5 h-5 text-[#181e4b] mt-1" />
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                Secure Payment
              </p>
              <p className="text-[12px] text-[#5e6282]">
                Your payment information is encrypted and secure. We never store your full payment details.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="content-stretch flex gap-[16px] items-center justify-between w-full">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="px-[32px] py-[16px] rounded-[8px] border-2 border-gray-300 text-black hover:bg-gray-50 transition-colors font-['Inter:Medium',sans-serif] font-medium text-[16px]"
              disabled={loading}
            >
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={loading}
            className="px-[32px] py-[16px] rounded-[8px] bg-[#DF6951] text-white hover:bg-[#c85a43] transition-colors disabled:opacity-50 ml-auto font-['Inter:Medium',sans-serif] font-medium text-[16px] w-[240px]"
          >
            {loading ? 'Processing Payment...' : `Pay $${amount.toLocaleString()}`}
          </button>
        </div>
      </form>
    </div>
  );
}
