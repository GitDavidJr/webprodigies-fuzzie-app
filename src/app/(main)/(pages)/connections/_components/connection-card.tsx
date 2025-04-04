import { Card, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card'
import { ConnectionTypes } from '@/src/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    type: ConnectionTypes
    icon: string
    title: ConnectionTypes
    description: string
    callback?: () => void
    //connected: {} & any
}

const ConnectionCard = ({
    type,
    icon,
    title,
    description,
    //connected,
}: Props) => {
  return (
    <Card className='flex w-full items-center justify-between'>
        <CardHeader className='flex flex-col gap-4'>
            <div className="flex flex-row gap-2">
                <Image
                    src={icon}
                    alt={title}
                    height={30}
                    width={30}
                    className='object-contain'
                />
            </div>
            <div>
                <CardTitle className='text-lg'>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </div>
        </CardHeader>
        <div className='flex flex-row items-center gap-2 p-4'>
            {/* {connected[type] ? (
                <div className='border-bg-primary rounded-lg border-2 px-3 py-2 font-bold'>
                    Connected
                </div>
            ) : ( */}
                <Link
                    href={
                        title === 'Discord'
                            ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                            : title === 'Notion'
                            ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                            : title === 'Slack'
                            ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                            : '#'
                    }
                    className='bg-primary rounded-lg p-2 font-bold text-primary-foreground'
                >
                    Connect
                </Link>
            {/* )} */}
        </div>
    </Card>
  )
}

export default ConnectionCard