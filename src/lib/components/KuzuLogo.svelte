<script lang="ts">
  const {
    class: className = "",
    iconOnly = false,
    textClass = "text-foreground",
  } = $props<{
    class?: string;
    iconOnly?: boolean;
    textClass?: string;
  }>();

  let viewBox = $derived(iconOnly ? "0 0 56 56" : "0 0 200 56");
</script>

<div
  class={`inline-flex ${className}`}
>
  <svg
    {viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-full h-full"
  >
    {#if !iconOnly}
      <!-- <path d="M190.857 38L200 48H190.857V38Z" fill="#FF6900"/> -->
      <path
        class={textClass}
        d="M169.507 48.2C167.526 48.2 165.792 47.7378 164.306 46.8133C162.856 45.8889 161.724 44.5911 160.91 42.92C160.131 41.2489 159.742 39.2578 159.742 36.9467V19.6667H165.209V35.4533C165.209 37.0889 165.456 38.5111 165.952 39.72C166.482 40.8933 167.225 41.8 168.18 42.44C169.171 43.08 170.356 43.4 171.736 43.4C172.762 43.4 173.7 43.24 174.549 42.92C175.398 42.5644 176.123 42.0844 176.725 41.48C177.362 40.8756 177.857 40.1467 178.211 39.2933C178.565 38.44 178.742 37.5156 178.742 36.52V19.6667H184.208V47.6667H178.742V41.8L179.697 41.16C179.272 42.4756 178.547 43.6667 177.521 44.7333C176.53 45.8 175.345 46.6533 173.965 47.2933C172.585 47.8978 171.099 48.2 169.507 48.2Z"
        fill="currentColor"
      />
      <path
        class={textClass}
        d="M132.869 47.6667V43.08L147.251 23.7733V24.4133H132.869V19.6667H153.195V24.1467L139.025 43.1867L138.813 42.92H153.513V47.6667H132.869Z"
        fill="currentColor"
      />
      <path
        class={textClass}
        d="M111.875 48C109.855 48 108.088 47.5347 106.574 46.6043C105.095 45.6738 103.941 44.3675 103.112 42.6855C102.319 41.0034 101.922 38.9993 101.922 36.673V19.28H107.493V35.1699C107.493 36.8162 107.746 38.2477 108.251 39.4645C108.791 40.6455 109.549 41.5581 110.522 42.2023C111.532 42.8465 112.74 43.1686 114.146 43.1686C115.192 43.1686 116.148 43.0075 117.013 42.6855C117.878 42.3276 118.618 41.8444 119.231 41.236C119.88 40.6276 120.385 39.894 120.745 39.0351C121.106 38.1761 121.286 37.2457 121.286 36.2436V19.28H126.857V47.4632H121.286V41.5581L122.26 40.9139C121.827 42.2381 121.088 43.437 120.042 44.5106C119.032 45.5843 117.824 46.4432 116.418 47.0874C115.012 47.6958 113.497 48 111.875 48Z"
        fill="currentColor"
      />
      <path
        d="M107.71 12.4019L117.121 17.4481L118.96 14.7103L111.225 8L107.71 12.4019Z"
        fill="#FF6900"
      />
      <path
        class={textClass}
        d="M76.9886 39.5533L76.7233 33.58L90.0439 20.3H97.4207L76.9886 39.5533ZM72 48.3V8.83334H77.4663V48.3H72ZM90.7869 48.3L80.279 35.98L84.1531 32.4067L97.7922 48.3H90.7869Z"
        fill="currentColor"
      />
    {/if}
    <g clip-path="url(#clip0_102_361)">
      <g filter="url(#filter0_ii_102_361)">
        <rect width="56" height="56" fill="url(#paint0_linear_102_361)" />
      </g>
      <g filter="url(#filter1_i_102_361)">
        <path
          d="M19.3203 8.68966C17.7578 8.68966 16.5859 8 16.5859 8C17.7869 10.4788 18.1399 11.8804 18.1484 14.4039V22.7783H20.4922V14.4039C20.513 11.7242 20.8578 10.3229 22.0547 8C22.0547 8 20.8828 8.68966 19.3203 8.68966Z"
          fill="#973C00"
        />
        <path
          d="M37.875 15.8818C39.6009 15.8818 41 14.4703 41 12.7291C41 10.9879 39.6009 9.57635 37.875 9.57635C36.1491 9.57635 34.75 10.9879 34.75 12.7291C34.75 14.4703 36.1491 15.8818 37.875 15.8818Z"
          fill="#973C00"
        />
        <path
          d="M22.25 28C22.25 29.7412 20.8509 31.1527 19.125 31.1527C17.3991 31.1527 16 29.7412 16 28C16 26.2588 17.3991 24.8473 19.125 24.8473C20.8509 24.8473 22.25 26.2588 22.25 28Z"
          fill="#973C00"
        />
        <path
          d="M41 43.3695C41 45.1107 39.6009 46.5222 37.875 46.5222C36.1491 46.5222 34.75 45.1107 34.75 43.3695C34.75 41.6283 36.1491 40.2167 37.875 40.2167C39.6009 40.2167 41 41.6283 41 43.3695Z"
          fill="#973C00"
        />
        <path
          d="M24.984 27.046C24.984 27.046 24.7544 25.697 23.75 24.4894C22.7457 23.2819 21.4687 22.8195 21.4687 22.8195C24.0019 22.2514 25.2875 21.6172 27.3357 19.9107L33.6945 14.5278L35.201 16.3391L28.8422 21.722C26.9315 23.3508 26.0942 24.5245 24.984 27.046Z"
          fill="#973C00"
        />
        <path
          d="M23.75 31.5418C22.7457 32.7493 21.4688 33.2117 21.4688 33.2117C24.1229 33.8769 25.414 34.505 27.3357 36.1205L33.6945 41.5034L35.201 39.6921L28.8422 34.3092C26.8208 32.5706 25.9784 31.4033 24.984 28.9852C24.984 28.9852 24.7544 30.3342 23.75 31.5418Z"
          fill="#973C00"
        />
        <path
          d="M16.5859 48C16.5859 48 17.7578 47.3103 19.3203 47.3103C20.8828 47.3103 22.0547 48 22.0547 48C20.8578 45.6771 20.513 44.2758 20.4922 41.5961V33.2217H18.1484V41.5961C18.1399 44.1197 17.7869 45.5212 16.5859 48Z"
          fill="#973C00"
        />
      </g>
      <g filter="url(#filter2_i_102_361)">
        <!-- <path d="M56 10.56L37.7096 0H56V10.56Z" fill="#973C00"/> -->
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_102_361"
        x="-8"
        y="-10"
        width="84"
        height="86"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="20" dy="21" />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.537255 0 0 0 0 0.0156863 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_102_361"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-8" dy="-10" />
        <feGaussianBlur stdDeviation="12.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.960784 0 0 0 0 0.286275 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_102_361"
          result="effect2_innerShadow_102_361"
        />
      </filter>
      <filter
        id="filter1_i_102_361"
        x="16"
        y="8"
        width="25"
        height="42"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_102_361"
        />
      </filter>
      <filter
        id="filter2_i_102_361"
        x="37.7096"
        y="0"
        width="18.2904"
        height="14.56"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_102_361"
        />
      </filter>
      <linearGradient
        id="paint0_linear_102_361"
        x1="30.5"
        y1="-32.5"
        x2="30.5"
        y2="77.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.53602" stop-color="#FF6900" />
        <stop offset="1" stop-color="#F75101" />
      </linearGradient>
      <clipPath id="clip0_102_361">
        <rect width="56" height="56" rx="8" fill="white" />
      </clipPath>
    </defs>
  </svg>
</div>
