interface FacebookProps {
  className?: string
  w: number
}

export const Facebook = ({ className, w }: FacebookProps) => (
  <div className={`flex flex-col items-center py-4`}>
    <iframe
      src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmujeres.migrantas&tabs=timeline&width=${w}&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
      width={w}
      height='600'
      allowFullScreen={true}
      allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
      className={`${className} rounded-xl shadow-xl`}
    ></iframe>
  </div>
)
