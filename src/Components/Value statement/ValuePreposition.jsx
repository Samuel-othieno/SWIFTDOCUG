import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";


const features = [
  {
    name: "Convenience and Accessibility",
    description:
      "Experience healthcare on your terms. Connect with our expert medical professionals from the comfort of your home or office, making quality healthcare just a click away",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Time Efficiency",
    description:
      "Say goodbye to long wait times. Our platform is designed for efficiency, allowing you to schedule and attend appointments without the hassle, providing swift and seamless medical care.",
    icon: LockClosedIcon,
  },
  {
    name: "Broad Access to Specialists",
    description:
      "Access a world of expertise. Connect with a diverse range of healthcare specialists without geographical constraints. Our platform brings top-notch medical professionals to you, wherever you are.",
    icon: ArrowPathIcon,
  },
];

export default function ValuePrep() {
  return (
    <div className="py-[0.5rem] sm:py-[1rem]">
      <div className="mx-auto max-w-fit px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-[0.1rem] text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our promise to you;
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-14 lg:max-w-4xl">
          <dl className="max-w-fit gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {/* {feature.description} */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

import { Container, Title, Accordion } from '@mantine/core';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function ThePromise() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Our Promise to you
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>Convenience and Accessibility</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Time Efficiency</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>Broad Access</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>What payment systems to you work with?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
