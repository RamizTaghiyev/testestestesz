import React from 'react';
import Button from '../../components/ui/Button';
import ChipView, { ChipItem } from '../../components/ui/ChipView';
import EditText from '../../components/ui/EditText';
import RatingBar from '../../components/ui/RatingBar';

const HomePage = () => {
  return (
    <div className="w-full bg-global-11">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="flex justify-between items-center py-4 sm:py-6 lg:py-10">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/img_group.svg" alt="Finzo Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="ml-3 text-lg sm:text-xl lg:text-2xl font-bold text-global-1 font-helvetica">Finzo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-bold text-global-5">Products</span>
              <img src="/images/img_vuesax_linear_arrow_down.svg" alt="" className="w-5 h-5" />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-bold text-global-5">Company</span>
              <img src="/images/img_vuesax_linear_arrow_down.svg" alt="" className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-global-5">Features</span>
            <span className="text-sm font-bold text-global-5">Pricing</span>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-bold text-global-5">Support</span>
              <img src="/images/img_vuesax_linear_arrow_down.svg" alt="" className="w-5 h-5" />
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="outline" size="small" className="hidden sm:block">
              Login
            </Button>
            <Button variant="primary" size="small">
              Open Account
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 sm:py-12 lg:py-16">
          {/* Hero Images Stack */}
          <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <img 
                src="/images/img_free_iphone_14_pro_mockup_3.png" 
                alt="Finzo Mobile App" 
                className="w-full max-w-md mx-auto lg:max-w-lg"
              />
              <img 
                src="/images/img_frame_186345.png" 
                alt="Feature highlight" 
                className="absolute top-1/4 right-0 w-24 sm:w-32 lg:w-40"
              />
              <img 
                src="/images/img_test.png" 
                alt="User avatar" 
                className="absolute bottom-1/4 right-4 w-16 sm:w-20 lg:w-24 rounded-full"
              />
              <img 
                src="/images/img_frame_18634.png" 
                alt="Chart" 
                className="absolute top-1/3 left-0 w-20 sm:w-24 lg:w-32"
              />
              <img 
                src="/images/img_frame_1863.png" 
                alt="Financial data" 
                className="absolute top-1/2 left-1/4 w-32 sm:w-40 lg:w-48"
              />
              <img 
                src="/images/img_test_54x54.png" 
                alt="Icon" 
                className="absolute top-1/4 right-1/4 w-12 sm:w-14"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-8xl font-medium text-global-4 leading-tight mb-6 sm:mb-8">
              Control your financial future easily
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-global-8 mb-8 sm:mb-12 leading-relaxed">
              From easy money management, to financial goals and investments. Open your account in a Flash
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Button variant="primary" size="large">
                Open Account
              </Button>
              <Button variant="outline" size="large">
                Generate your card
              </Button>
            </div>

            {/* User Stats */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                <img src="/images/img_customer_1_1.png" alt="User" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white" />
                <img src="/images/img_avatar2_1.png" alt="User" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white" />
                <img src="/images/img_avatar3_1.png" alt="User" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white" />
              </div>
              <img src="/images/img_arrow_up.svg" alt="Growth" className="w-6 h-6 sm:w-8 sm:h-8" />
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-global-3">15 Million+</h3>
                <p className="text-sm sm:text-base text-global-9 mt-1">
                  Trusted by million of satisfied users, our financial services have made a real impact on people's lives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-global-3 mb-8">
            Feel the best experience with our features
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Custom Card Feature */}
          <div className="bg-global-7 rounded-[32px] p-6 sm:p-8 lg:p-12">
            <div className="mb-8 sm:mb-12">
              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-global-10 rounded-full flex items-center justify-center mb-8 sm:mb-12">
                <img src="/images/img_frame_17.svg" alt="Custom card icon" className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-global-3 mb-4 sm:mb-6">
                Custom and design your card, make it look unique
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-global-8 leading-relaxed">
                Create a custom card that reflects your unique style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card.
              </p>
            </div>

            {/* Card Preview */}
            <div className="relative">
              <div className="bg-global-1 rounded-[30px] p-6 sm:p-8 relative overflow-hidden">
                <img src="/images/img_noise.png" alt="Card texture" className="absolute inset-0 w-full h-full object-cover rounded-[30px]" />
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8 sm:mb-12">
                    <span className="text-lg sm:text-xl font-bold text-global-11">Finzo</span>
                    <img src="/images/img_visa.svg" alt="Visa" className="h-4 sm:h-5" />
                  </div>
                  <img src="/images/img_chip.svg" alt="Chip" className="w-8 h-8 sm:w-10 sm:h-10 mb-8 sm:mb-12" />
                  <div className="mb-6 sm:mb-8">
                    <p className="text-xs sm:text-sm text-global-8 mb-1">Card Holder</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-global-11">Jayesh Patil</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-global-8 mb-1">Account Number</p>
                      <p className="text-base sm:text-lg font-medium text-global-11">**** 3636</p>
                    </div>
                    <div>
                      <p className="text-xs text-global-8 mb-1">Expiry date</p>
                      <p className="text-base sm:text-lg font-medium text-global-11">02/30</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="absolute -right-8 sm:-right-12 top-4 sm:top-8 bg-global-11 rounded-[30px] p-6 sm:p-8 w-4/5 shadow-lg">
                <img src="/images/img_cloth14_1.png" alt="Card design" className="absolute inset-0 w-full h-full object-cover rounded-[30px]" />
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8 sm:mb-12">
                    <span className="text-lg sm:text-xl font-bold text-global-1">Finzo</span>
                    <img src="/images/img_mastercard.png" alt="Mastercard" className="h-6 sm:h-8" />
                  </div>
                  <img src="/images/img_chip_white_a700.svg" alt="Chip" className="w-8 h-8 sm:w-10 sm:h-10 mb-8 sm:mb-12" />
                  <div className="mb-6 sm:mb-8">
                    <p className="text-xs sm:text-sm text-global-6 mb-1">Card Holder</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-global-3">Jenny</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-global-6 mb-1">Account Number</p>
                      <p className="text-base sm:text-lg font-medium text-global-3">**** 3636</p>
                    </div>
                    <div>
                      <p className="text-xs text-global-6 mb-1">Expiry date</p>
                      <p className="text-base sm:text-lg font-medium text-global-3">02/30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Insights Feature */}
          <div className="bg-global-7 rounded-[32px] p-6 sm:p-8 lg:p-12">
            <div className="mb-8 sm:mb-12">
              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-global-10 rounded-full flex items-center justify-center mb-8 sm:mb-12">
                <img src="/images/img_ui_icon_line_chart_light.svg" alt="Chart icon" className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-global-3 mb-4 sm:mb-6">
                Personalized your Financial insights and goals
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-global-8 leading-relaxed">
                Track your spending patterns, analyze income or expenses easily, and receive personalized recommendations to optimize your financial habits.
              </p>
            </div>

            {/* Chart Interface */}
            <div className="bg-global-11 rounded-[32px] p-4 sm:p-6">
              <div className="flex space-x-2 mb-4 sm:mb-6">
                <button className="flex items-center space-x-2 bg-button-2 text-button-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
                  <img src="/images/img_icon_outlined_directions_straight_arrows_down_left.svg" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base font-bold">Income</span>
                </button>
                <button className="flex items-center space-x-2 bg-global-8 text-global-7 px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
                  <img src="/images/img_icon_outlined_directions_straight_arrows_up_right.svg" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base font-bold">Expense</span>
                </button>
              </div>

              <div className="mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-global-9 mb-1">Income Average</p>
                <p className="text-2xl sm:text-3xl font-medium text-global-3">₹1,00,546.00</p>
                <div className="flex items-center space-x-1 mt-2">
                  <img src="/images/img_ui_icon_trending_up_light.svg" alt="Trending up" className="w-4 h-4" />
                  <span className="text-xs sm:text-sm text-global-2">+15,090.25</span>
                  <span className="text-xs sm:text-sm text-global-9">from last month</span>
                </div>
              </div>

              {/* Chart */}
              <div className="flex items-end space-x-1 h-16 sm:h-20">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-6 sm:w-8 h-8 sm:h-12 bg-global-4 rounded-sm"></div>
                  <span className="text-xs text-global-7">Jan</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-global-9 rounded-sm"></div>
                  <span className="text-xs text-global-7">Feb</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-6 sm:w-8 h-10 sm:h-14 bg-global-4 rounded-sm"></div>
                  <span className="text-xs text-global-7">March</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-6 sm:w-8 h-12 sm:h-16 bg-global-4 rounded-sm"></div>
                  <span className="text-xs text-global-7">Apr</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-6 sm:w-8 h-8 sm:h-12 bg-global-4 rounded-sm"></div>
                  <span className="text-xs text-global-7">May</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-global-9 rounded-sm"></div>
                  <span className="text-xs text-global-7">Jun</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-6 sm:w-8 h-10 sm:h-14 bg-global-4 rounded-sm"></div>
                  <span className="text-xs text-global-7">Jul</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Free Transfer */}
          <div className="bg-global-7 rounded-[32px] p-6 sm:p-8 lg:p-12">
            <div className="w-16 h-16 sm:w-18 sm:h-18 bg-global-10 rounded-full flex items-center justify-center mb-8 sm:mb-12">
              <img src="/images/img_icon.svg" alt="Transfer icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-global-3 mb-4 sm:mb-6">
              Free Transfer anywhere around the world
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-global-8 leading-relaxed mb-8">
              Create a custom card that reflects your unique style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card.
            </p>
            <img src="/images/img_dotted_map_white_background.png" alt="World map" className="w-full" />
          </div>

          {/* Multi-Currency */}
          <div className="bg-global-7 rounded-[32px] p-6 sm:p-8 lg:p-12">
            <div className="w-16 h-16 sm:w-18 sm:h-18 bg-global-10 rounded-full flex items-center justify-center mb-8 sm:mb-12">
              <img src="/images/img_frame_17.svg" alt="Currency icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-global-3 mb-4 sm:mb-6">
              Hold money in 30+ currencies
            </h3>
            <img src="/images/img_test_576x456.png" alt="Currency display" className="w-full mt-8" />
          </div>

          {/* Subscriptions */}
          <div className="bg-global-7 rounded-[32px] p-6 sm:p-8 lg:p-12">
            <div className="w-16 h-16 sm:w-18 sm:h-18 bg-global-10 rounded-full flex items-center justify-center mb-8 sm:mb-12">
              <img src="/images/img_icon_blue_gray_900.svg" alt="Subscription icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-global-3 mb-4 sm:mb-6">
              Subscriptions you control in one place
            </h3>
            <div className="flex items-center space-x-4 mt-8">
              <div className="bg-global-11 rounded-[24px] p-4 flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <img src="/images/img_figma_1.svg" alt="Figma" className="w-3 h-4" />
                  <span className="text-xs font-medium">Figma Pro</span>
                </div>
                <p className="text-2xl font-medium text-global-1">$12.00</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img src="/images/img_frame_186359.png" alt="Action" className="w-12 h-12 rounded-[14px]" />
                <img src="/images/img_frame_186354.png" alt="Action" className="w-12 h-12 rounded-[14px]" />
              </div>
            </div>
          </div>

          {/* Check Other Features */}
          <div className="bg-global-1 rounded-[32px] p-6 sm:p-8 lg:p-12 relative overflow-hidden lg:col-span-1">
            <img src="/images/img_layer_1_white_a700.png" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[300px]">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-global-11 mb-6">
                Check our other product features
              </h3>
              <Button variant="primary" size="large" className="w-fit">
                <span>View more</span>
                <img src="/images/img_arrowright.svg" alt="" className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-global-3 mb-6">
            200+ The fastest growing company use Finzo
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-global-9 font-semibold">
            Many companies have tried using Finzo and they trust the safety of their money
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-global-6 rounded-[24px] p-8 sm:p-12 flex items-center justify-center">
            <img src="/images/img_pinterest_logo_svg_150px.svg" alt="Pinterest" className="h-8 sm:h-9" />
          </div>
          <div className="bg-global-6 rounded-[24px] p-8 sm:p-12 flex items-center justify-center">
            <img src="/images/img_path833.svg" alt="Zoom" className="h-8 sm:h-9" />
          </div>
          <div className="bg-global-6 rounded-[24px] p-8 sm:p-12 flex items-center justify-center">
            <img src="/images/img_discord_logo_svg_150px.svg" alt="Discord" className="h-8 sm:h-9" />
          </div>
          <div className="bg-global-6 rounded-[24px] p-8 sm:p-12 flex items-center justify-center">
            <img src="/images/img_dropbox_logo_svg_150px.svg" alt="Dropbox" className="h-8 sm:h-9" />
          </div>
          <div className="bg-global-6 rounded-[24px] p-8 sm:p-12 flex items-center justify-center">
            <img src="/images/img_monday_logo_svg_150px.svg" alt="Monday" className="h-8 sm:h-9" />
          </div>
          <div className="bg-global-6 rounded-[24px] p-8 sm:p-12 flex items-center justify-center">
            <img src="/images/img_slack_logo_svg_150px.svg" alt="Slack" className="h-8 sm:h-9" />
          </div>
          <div className="bg-global-6 rounded-[24px] p-8 sm:p-12 flex items-center justify-center">
            <img src="/images/img_stripe_logo_svg_150px.svg" alt="Stripe" className="h-8 sm:h-9" />
          </div>
          <div className="bg-global-6 rounded-[24px] p-8 sm:p-12 flex items-center justify-center">
            <img src="/images/img_airtable_logo_svg_150px.svg" alt="Airtable" className="h-8 sm:h-9" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img src="/images/img_indian_business.png" alt="Business person" className="w-full max-w-md mx-auto lg:max-w-lg" />
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="bg-global-6 rounded-[32px] p-8 sm:p-12 lg:p-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-global-3 mb-8 sm:mb-12">
                Join 15+ million people who already trust us with their money
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-global-8 mb-8 sm:mb-12 leading-relaxed">
                Overall, this app has been a life-changer for me. It has revolutionized the way I approach my finances, providing me with the tools, insights, and security I need to unlock my financial freedom.
              </p>
              
              <div className="flex items-center justify-between">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-global-1">
                  Samruddhi Bhosale
                </h3>
                <div className="flex space-x-4">
                  <button className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <img src="/images/img_arrowright.svg" alt="Previous" className="w-6 h-6 rotate-180" />
                  </button>
                  <button className="w-12 h-12 sm:w-14 sm:h-14 bg-global-10 rounded-full flex items-center justify-center">
                    <img src="/images/img_ui_icon_arrow_forward_light.svg" alt="Next" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto py-16 sm:py-20">
        <div className="bg-global-6 rounded-[32px] p-8 sm:p-12 lg:p-24 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-global-3 mb-6 sm:mb-8">
            Get the Finzo Mobile app.
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-global-9 font-semibold mb-8 sm:mb-12 max-w-2xl mx-auto">
            With this platform, you can access your account anywhere, anytime for balance and so much more.
          </p>

          <ChipView>
            <ChipItem leftImage={{ src: "/images/img_apple.svg", width: 28, height: 28 }}>
              Download Now
            </ChipItem>
            <ChipItem leftImage={{ src: "/images/img_google_play_store_1.png", width: 28, height: 28 }}>
              Download Now
            </ChipItem>
          </ChipView>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto py-16 sm:py-20">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-medium text-global-1 mb-12 sm:mb-16">
            Save smart. Achieve more.
          </h2>
        </div>

        {/* Newsletter and Footer */}
        <div className="bg-global-2 rounded-[32px] p-8 sm:p-12 lg:p-20">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 lg:mb-20">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-global-10 rounded-full flex items-center justify-center mb-8 sm:mb-12">
                <img src="/images/img_icon_outlined.svg" alt="Newsletter icon" className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-global-11 mb-6 sm:mb-8">
                Keep up with the latest
              </h3>
              <p className="text-base sm:text-lg text-global-9">
                Join our newsletter to stay up to date on features and releases.
              </p>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-8">
              <p className="text-base sm:text-lg font-medium text-global-11 mb-4">Stay up to date</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <EditText 
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button variant="primary" size="medium">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-global-8">
                <span className="text-global-8">By subscribing you agree to our </span>
                <span className="text-global-11 underline">Privacy Policy</span>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[2px] w-full bg-global-3 mb-12 sm:mb-16"></div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Logo Column */}
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center mb-4">
                <img src="/images/img_group_yellow_600.svg" alt="Finzo Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
                <span className="ml-3 text-lg sm:text-xl lg:text-2xl font-bold text-global-11 font-helvetica">Finzo</span>
              </div>
              <p className="text-sm sm:text-base text-global-10 opacity-60">
                Make your complicated finance more simple
              </p>
            </div>

            {/* Finzo Column */}
            <div>
              <h4 className="text-base sm:text-lg font-medium text-global-11 mb-4">Finzo</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Payment</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Card</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Pricing</a></li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="text-base sm:text-lg font-medium text-global-11 mb-4">Products</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Personal</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Business</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Invoices</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-base sm:text-lg font-medium text-global-11 mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">About</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Careers</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Press Kit</a></li>
              </ul>
            </div>

            {/* Developer Column */}
            <div>
              <h4 className="text-base sm:text-lg font-medium text-global-11 mb-4">Developer</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">API Documentation</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Guide</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Change Log</a></li>
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h4 className="text-base sm:text-lg font-medium text-global-11 mb-4">Community</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Refer a Friend</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Gift</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-base sm:text-lg font-medium text-global-11 mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Help</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">FAQ</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Contact</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-base sm:text-lg font-medium text-global-11 mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Privacy Policy</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Terms of Services</a></li>
                <li><a href="#" className="text-sm sm:text-base text-global-10 opacity-60 hover:opacity-100">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8">
          <p className="text-sm sm:text-base font-medium text-global-1 mb-4 sm:mb-0">
            © 2023 Finzo. All Right Reserved
          </p>
          <RatingBar rating={5} readonly size="medium" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;