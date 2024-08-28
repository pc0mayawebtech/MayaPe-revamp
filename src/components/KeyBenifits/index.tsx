import { DollarSignIcon, LockIcon, ZapIcon } from 'lucide-react'
import './index.css'

const KeyBenifits = () => {
  return (
    <section className="keyBenifits w-full py-12 md:py-24 lg:py-32 px-4 sm:px-8 bg-gradient-to-b from-white via-white to-sky-200">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              src="/benifits.svg"
              width="550"
              height="310"
              alt="Features"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center lg:order-last"
            />
            <div className="space-y-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Key Benefits</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our payin and payout solutions offer a range of benefits to streamline your financial operations and
                  drive business growth.
                </p>
              </div>
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <ZapIcon className="h-8 w-8 text-sky-500" />
                  <div>
                    <h3 className="text-lg font-semibold">Fast Transactions</h3>
                    <p className="text-muted-foreground">
                      Enjoy lightning-fast payin and payout processing, so you can focus on your core business.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <LockIcon className="h-8 w-8 text-sky-500" />
                  <div>
                    <h3 className="text-lg font-semibold">Secure Payments</h3>
                    <p className="text-muted-foreground">
                      Our robust security measures ensure your financial transactions are safe and protected.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <DollarSignIcon className="h-8 w-8 text-sky-500" />
                  <div>
                    <h3 className="text-lg font-semibold">Competitive Rates</h3>
                    <p className="text-muted-foreground">
                      Enjoy competitive payin and payout rates to maximize your financial returns.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
  )
}

export default KeyBenifits