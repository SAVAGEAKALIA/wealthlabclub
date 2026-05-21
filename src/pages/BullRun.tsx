import { ArrowRight, BarChart } from "lucide-react";

export default function BullRun() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-primary-dark">
        <div className="container">
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Bull Run Master Course
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                  Master the art and science of chart reading and pattern
                  recognition to make data-driven trading decisions.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">FREE</span>
                  </div>
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">
                      Weekly Live Stream
                    </span>
                  </div>
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">
                      Practical Exercises
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <a
                    href="https://whop.com/trading-technical-analysis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a> */}
                  <p>
                    Email{" "}
                    <a
                      href="mailto:im100xreal@gmail.com"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      im100xreal@gmail.com
                    </a>{" "}
                    or text +81 803 555 4870 on WhatsApp to secure your seat.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10 md:hidden"></div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwY2hhcnRzJTIwdGVjaG5pY2FsJTIwYW5hbHlzaXMlMjBjb21wdXRlcnxlbnwwfHx8fDE3NDczNDIxODZ8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
                alt="Technical Analysis Learning"
                className="rounded-lg shadow-xl w-full border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Course Structure
            </h2>
            <p className="text-gray-300 mb-12 text-center">
              Our Bull Run Master course is designed to help you master chart
              reading and develop profitable trading strategies.
            </p>

            <div className="space-y-8">
              <div className="bg-primary-light rounded-lg overflow-hidden border border-gray-800">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 rounded-lg bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 text-gradient-mid">
                      <BarChart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Bull Run Master Course
                      </h3>
                      <ul className="grid grid-cols-1 gap-2 mt-4">
                        <ul className="space-y-6">
                          {/* Week 1 */}
                          <li>
                            <h4 className="text-white text-lg font-medium mb-1">
                              Week 1: Introduction to Cryptocurrency & Spot
                              Trading
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                              <li>What is cryptocurrency?</li>
                              <li>Bitcoin & Ethereum overview</li>
                              <li>Spot trading vs Futures/Margin trading</li>
                              <li>
                                Understanding trading pairs (BTC/USDT, ETH/USDT)
                              </li>
                              <li>
                                Overview of major exchanges (Binance, Bybit,
                                MEXC)
                              </li>
                            </ul>
                          </li>

                          {/* Week 2 */}
                          <li>
                            <h4 className="text-white text-lg font-medium mb-1">
                              Week 2: Wallets, Exchanges & Account Setup
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                              <li>Choosing a reputable exchange</li>
                              <li>Account setup, KYC verification</li>
                              <li>Wallet types: Hot vs Cold storage</li>
                              <li>Security basics: 2FA & seed phrases</li>
                              <li>Funding accounts (Fiat, P2P)</li>
                            </ul>
                          </li>

                          {/* Week 3 */}
                          <li>
                            <h4 className="text-white text-lg font-medium mb-1">
                              Week 3: Trading Interface & Order Types
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                              <li>
                                Understanding the order book & price chart
                              </li>
                              <li>Market, Limit, and Stop-Limit orders</li>
                              <li>How trading fees work</li>
                              <li>Base vs Quote currencies explained</li>
                            </ul>
                          </li>

                          {/* Week 4 */}
                          <li>
                            <h4 className="text-white text-lg font-medium mb-1">
                              Week 4: Trading Strategies & Risk Management
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                              <li>DCA (Dollar-Cost Averaging)</li>
                              <li>Support & Resistance basics</li>
                              <li>Stop-loss & Take-profit execution</li>
                              <li>Position sizing & managing risk per trade</li>
                            </ul>
                          </li>

                          {/* Week 5 */}
                          <li>
                            <h4 className="text-white text-lg font-medium mb-1">
                              Week 5: Trading Psychology & Continuous Learning
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                              <li>Emotional control while trading</li>
                              <li>Avoiding FOMO and revenge trading</li>
                              <li>Maintaining a trade journal</li>
                              <li>Staying updated with market news</li>
                            </ul>
                          </li>

                          {/* Week 6 */}
                          <li>
                            <h4 className="text-white text-lg font-medium mb-1">
                              Week 6: Introduction to DeFi
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                              <li>What is DeFi & how it differs from CeFi</li>
                              <li>Smart contracts & governance tokens</li>
                              <li>Lending, borrowing & yield strategies</li>
                              <li>
                                Real-world DeFi use cases (Nigeria & global)
                              </li>
                            </ul>
                          </li>

                          {/* Week 7 */}
                          <li>
                            <h4 className="text-white text-lg font-medium mb-1">
                              Week 7: Trading on DEXs
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                              <li>Liquidity pools explained</li>
                              <li>Slippage & price impact</li>
                              <li>Token pairs & aggregators</li>
                              <li>Platforms: Uniswap, Raydium, Jupiter</li>
                            </ul>
                          </li>

                          {/* Week 8 */}
                          <li>
                            <h4 className="text-white text-lg font-medium mb-1">
                              Week 8: Solana Memecoins & Advanced Tactics
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                              <li>Understanding BONK, WIF, POPCAT</li>
                              <li>Wallets: Phantom & Backpack</li>
                              <li>Whale tracking & sniping new launches</li>
                              <li>Social alpha tools: Telegram & Twitter</li>
                            </ul>
                          </li>

                          {/* Week 9 */}
                          <li>
                            <h4 className="text-white text-lg font-medium mb-1">
                              Week 9: Risk Management, Safety & Final Project
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                              <li>Rugpulls, honeypots & scam tokens</li>
                              <li>Phishing prevention & response techniques</li>
                              <li>Wallet hygiene & multi-wallet system</li>
                              <li>Final safe trading checklist & review</li>
                            </ul>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              What You'll Learn
            </h2>
            <p className="text-gray-300 mb-12 text-center">
              By the end of this course, you'll have developed the skills to
              analyze market charts, identify profitable trading setups, and
              implement data-driven strategies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Skills You'll Develop
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">
                      Identify chart patterns with high probability outcomes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">
                      Use technical indicators to confirm trade signals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">
                      Determine optimal entry and exit points
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">
                      Develop personalized trading strategies
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Course Includes
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">
                      Video lessons with real market examples
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">
                      Weekly live trading sessions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">
                      Downloadable PDF resources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">
                      Practical exercises to build chart reading skills
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Learning Section */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHx0cmFkaW5nJTIwY2hhcnRzJTIwdGVjaG5pY2FsJTIwYW5hbHlzaXMlMjBjb21wdXRlcnxlbnwwfHx8fDE3NDczNDIxODZ8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
                alt="Real-world trading application"
                className="rounded-lg shadow-xl border border-gray-800"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full opacity-30 blur-xl"></div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Practical, Hands-On Learning
              </h2>
              <p className="text-gray-300 mb-6">
                Our course emphasizes practical application over theory. You'll
                learn by analyzing real market conditions and participating in
                live trading sessions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Real-time market analysis sessions
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Guided exercises with instructor feedback
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Case studies of successful trading setups
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Weekly live Q&A and trading sessions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10 p-8 md:p-12 rounded-lg border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Master Technical Analysis?
              </h2>
              <p className="text-gray-300 mb-8">
                Join our comprehensive course and transform your trading skills
                with data-driven chart analysis and proven technical strategies.
              </p>
              <p>
                Email{" "}
                <a
                  href="mailto:im100xreal@gmail.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  im100xreal@gmail.com
                </a>{" "}
                or text +81 803 555 4870 on WhatsApp to secure your seat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
