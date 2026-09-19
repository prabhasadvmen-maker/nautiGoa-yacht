export default function PaymentPending() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        
        {/* Logo / Brand */}
        <div className="mb-8">
          <img src="/Logo.jpg" alt="NautiGoa Yachts" className="h-16 mx-auto rounded-lg opacity-80" />
        </div>

        {/* 404 / Error Code */}
        <div className="text-[#C8A96B] text-8xl font-bold mb-2 tracking-widest">404</div>

        {/* Main Heading */}
        <h1 className="text-white text-2xl font-semibold mb-4">
          Website Renewal Pending
        </h1>

        {/* Message */}
        <p className="text-gray-400 text-base mb-2">
          This website is currently unavailable due to a <span className="text-[#C8A96B] font-medium">pending renewal payment</span>.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          Please complete the payment to restore access to this website.
        </p>

        {/* Divider */}
        <div className="border-t border-[#C8A96B]/30 mb-8" />

        {/* Contact Info */}
        <p className="text-gray-400 text-sm mb-4">For assistance, contact the website administrator:</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:info@advmen.com"
            className="px-6 py-3 bg-[#C8A96B] text-black text-sm font-semibold rounded-lg hover:bg-[#b8954f] transition-colors"
          >
            ✉ info@advmen.com
          </a>
          <a
            href="https://advmen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#C8A96B] text-[#C8A96B] text-sm font-semibold rounded-lg hover:bg-[#C8A96B]/10 transition-colors"
          >
            🌐 advmen.com
          </a>
        </div>

        {/* Footer note */}
        <p className="text-gray-600 text-xs mt-10">
          © NautiGoa Yachts — Powered by <span className="text-[#C8A96B]">Advmen</span>
        </p>

      </div>
    </div>
  );
}
