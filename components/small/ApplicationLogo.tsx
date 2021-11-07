import type { LogoAndMarkType } from "@/types/navbar.type"

export const ApplicationLogo: React.FC<LogoAndMarkType> = ({ className }) => {
  return (
    <svg className={className} width={490} height={500} viewBox="0 0 490 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={250} height={250} rx={58} fill="#38BDF8" />
      <rect x={115} y={125} width={250} height={250} rx={58} fill="#0EA5E9" />
      <rect x={240} y={250} width={250} height={250} rx={58} fill="#0284C7" />
    </svg>
  )
}

export const ApplicationMark: React.FC<LogoAndMarkType> = ({ className, color = "black" }) => {
  return (
    <svg className={className} width="2198" height="500" viewBox="0 0 2198 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="250" height="250" rx="58" fill="#38BDF8" />
      <rect x="115" y="125" width="250" height="250" rx="58" fill="#0EA5E9" />
      <rect x="240" y="250" width="250" height="250" rx="58" fill="#0284C7" />
      <path d="M655.453 321V178.812H704.184C720.264 178.812 732.504 182.035 740.902 188.48C749.301 194.926 753.5 204.529 753.5 217.289C753.5 223.799 751.742 229.659 748.227 234.867C744.711 240.076 739.568 244.112 732.797 246.977C740.479 249.06 746.404 252.999 750.57 258.793C754.802 264.522 756.918 271.423 756.918 279.496C756.918 292.842 752.621 303.096 744.027 310.258C735.499 317.419 723.259 321 707.309 321H655.453ZM680.16 256.84V301.273H707.602C715.349 301.273 721.404 299.353 725.766 295.512C730.128 291.671 732.309 286.332 732.309 279.496C732.309 264.717 724.757 257.165 709.652 256.84H680.16ZM680.16 238.676H704.379C712.061 238.676 718.051 236.951 722.348 233.5C726.71 229.984 728.891 225.036 728.891 218.656C728.891 211.625 726.872 206.547 722.836 203.422C718.865 200.297 712.647 198.734 704.184 198.734H680.16V238.676ZM885.629 178.812V273.832C885.629 288.936 880.779 300.915 871.078 309.77C861.443 318.559 848.585 322.953 832.504 322.953C816.228 322.953 803.305 318.624 793.734 309.965C784.164 301.241 779.379 289.164 779.379 273.734V178.812H803.988V273.93C803.988 283.435 806.397 290.694 811.215 295.707C816.033 300.72 823.129 303.227 832.504 303.227C851.514 303.227 861.02 293.201 861.02 273.148V178.812H885.629ZM952.914 259.574L936.801 276.664V321H912.094V178.812H936.801V245.512L950.473 228.617L992.074 178.812H1021.96L969.125 241.801L1024.98 321H995.688L952.914 259.574ZM1142.27 178.812V273.832C1142.27 288.936 1137.42 300.915 1127.72 309.77C1118.08 318.559 1105.23 322.953 1089.14 322.953C1072.87 322.953 1059.95 318.624 1050.38 309.965C1040.8 301.241 1036.02 289.164 1036.02 273.734V178.812H1060.63V273.93C1060.63 283.435 1063.04 290.694 1067.86 295.707C1072.67 300.72 1079.77 303.227 1089.14 303.227C1108.15 303.227 1117.66 293.201 1117.66 273.148V178.812H1142.27ZM1315.41 198.734H1271.08V321H1246.57V198.734H1202.62V178.812H1315.41V198.734ZM1402.04 287.895H1346.96L1335.43 321H1309.75L1363.46 178.812H1385.63L1439.44 321H1413.66L1402.04 287.895ZM1353.89 267.973H1395.1L1374.5 208.988L1353.89 267.973ZM1568.54 321H1543.93V257.816H1480.36V321H1455.65V178.812H1480.36V237.992H1543.93V178.812H1568.54V321ZM1701.84 178.812V273.832C1701.84 288.936 1696.99 300.915 1687.29 309.77C1677.65 318.559 1664.8 322.953 1648.71 322.953C1632.44 322.953 1619.52 318.624 1609.95 309.965C1600.38 301.241 1595.59 289.164 1595.59 273.734V178.812H1620.2V273.93C1620.2 283.435 1622.61 290.694 1627.43 295.707C1632.24 300.72 1639.34 303.227 1648.71 303.227C1667.73 303.227 1677.23 293.201 1677.23 273.148V178.812H1701.84ZM1841.1 321H1816.39L1753.01 220.121V321H1728.3V178.812H1753.01L1816.59 280.082V178.812H1841.1V321ZM1951.64 287.895H1896.57L1885.04 321H1859.36L1913.07 178.812H1935.24L1989.05 321H1963.27L1951.64 287.895ZM1903.5 267.973H1944.71L1924.11 208.988L1903.5 267.973ZM2118.05 321H2093.34L2029.96 220.121V321H2005.26V178.812H2029.96L2093.54 280.082V178.812H2118.05V321Z" fill={color} />
    </svg>
  )
}