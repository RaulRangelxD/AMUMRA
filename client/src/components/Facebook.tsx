interface FacebookProps {
  className?: string
  w: number
}

export const Facebook = ({ className, w }: FacebookProps) => (
  <div className={`flex flex-col items-center`}>
    <h2 className='font-bold text-xl w-full text-center mb-4'>Visitanos</h2>

    <iframe
      src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmujeres.migrantas&tabs=timeline&width=${w}&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
      width={w}
      height='500'
      allowFullScreen={true}
      allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
      className={`${className} rounded-xl shadow-xl`}
    ></iframe>
  </div>
)
