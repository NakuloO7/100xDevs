import { group } from 'console'
import { Agent, get } from 'http'
import { teardownTraceSubscriber } from 'next/dist/build/swc/generated-native'
import { getEdgePolyfilledModules } from 'next/dist/build/webpack/plugins/middleware-plugin'
import { edgeServerAppPaths } from 'next/dist/build/webpack/plugins/pages-manifest-plugin'
import { FLIGHT_HEADERS } from 'next/dist/client/components/app-router-headers'
import { errorToJSON } from 'next/dist/server/render'
import { Abril_Fatface, Faculty_Glyphic, Great_Vibes, Grenze_Gotisch, Reggae_One, Tiro_Devanagari_Hindi } from 'next/font/google'
import { getgid } from 'process'
import React from 'react'
import { DEFAULT_CIPHERS } from 'tls'


export default function signinLayout ( { children }: {children: React.ReactNode}) {
    return <div>
         <div className="p-4 mt-3 border-b text-center">
            Hello Hello! signin now to get 60% off
        </div>
        {children}
    </div>
}
