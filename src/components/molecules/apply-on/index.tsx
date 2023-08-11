import { CreditCardIcon, PrinterIcon } from "@heroicons/react/24/outline"
import { GlobeAltIcon, } from "@heroicons/react/24/solid"

const features = [
    {
        name: 'Apply Online',
        description:
            'Apply online via the governments e-service portal.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Pay Online',
        description:
            'Pay for your transit permit using a credit/debit card or via Mobile Money.',
        icon: CreditCardIcon,
    },
    {
        name: 'Download Permit',
        description:
            'Download and print the Transit Permit is issued immediately upon payment.',
        icon: PrinterIcon,
    },
]

const ApplyOnline = () => {
    return (
        <div className="py-12 bg-applyOn">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base text-white font-semibold tracking-wide uppercase">Online Application</h2>
                    <p className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Get a Transit Permit in 3 Simple Steps
                    </p>
                    <p className="mt-6 mb-14 text-lg leading-8 text-white">
                        Receive Inter County Transit Permits online, hassle-free.
                    </p>
                </div>
                <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <feature.icon className="h-6 w-6 text-travelButton" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>

                            <dd className="mt-2 text-base text-white">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}

export default ApplyOnline