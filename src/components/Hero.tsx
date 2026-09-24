import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Upload, ArrowRight, ShieldCheck, Film } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string>('/video.mp4');
  const [videoExists, setVideoExists] = useState<boolean>(true);
  const [showUploader, setShowUploader] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if default /video.mp4 is available
  useEffect(() => {
    fetch('/video.mp4', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          setVideoExists(false);
        } else {
          setVideoExists(true);
        }
      })
      .catch(() => setVideoExists(false));
  }, []);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If autoplay with audio is blocked or video file not loaded, open uploader
          if (!videoExists) {
            setShowUploader(true);
          }
        });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setVideoSrc(objectUrl);
      setVideoExists(true);
      setShowUploader(false);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }, 100);
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24">
      {/* Subtle background ambient warmth */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-1/2 translate-x-1/2 w-[700px] h-[500px] bg-[#F4E8DF]/60 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8B4A56] bg-[#F7EFE9] px-3.5 py-1 rounded-full border border-[#EADBCE]">
            SEU CASAMENTO, ORGANIZADO.
          </span>
        </div>

        {/* Headline Principal */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.15] text-[#242121] tracking-tight text-balance mb-4 font-medium">
          Planeje o seu grande dia sem se perder nos detalhes.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-[#5F5855] leading-relaxed max-w-2xl mx-auto font-normal mb-8">
          Organize tarefas, orçamento, fornecedores e todos os preparativos do casamento em um só lugar.
        </p>

        {/* VÍDEO LOGO ABAIXO DA HEADLINE */}
        <div className="relative max-w-[340px] sm:max-w-[380px] mx-auto mb-8">
          
          {/* Moldura elegante com acabamento champagne / dourado suave */}
          <div className="relative rounded-3xl overflow-hidden bg-black shadow-[0_20px_60px_rgba(45,41,40,0.16)] border-2 border-[#D8C7B2]">
            
            {/* Tag no topo do vídeo */}
            <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-[11px] font-medium tracking-wide border border-white/15">
                <Film className="w-3 h-3 text-[#E2C392]" />
                <span>Veja por dentro (0:59)</span>
              </span>
            </div>

            {/* Elemento de Vídeo Vertical (9:16) */}
            <div className="relative w-full aspect-[9/16] bg-[#1a1716] flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src={videoSrc}
                poster="/video-poster.jpg"
                playsInline
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Overlay de Play quando pausado */}
              {!isPlaying && (
                <div 
                  onClick={handlePlayToggle}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 flex flex-col items-center justify-center cursor-pointer group transition-all duration-300 z-10 p-6"
                >
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/90 group-hover:bg-white text-[#8B4A56] group-hover:scale-105 transition-all duration-200 flex items-center justify-center shadow-lg border border-[#EADBCE]">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>

                  <span className="mt-4 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase border border-white/20">
                    Aperte para assistir
                  </span>

                  <p className="text-[11px] text-white/80 mt-2 text-center max-w-[240px]">
                    Assista à demonstração do Planner da Noiva e Kit Premium
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Opção sutil para carregar arquivo direto do computador caso necessário */}
          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-[11px] text-[#8C8480] hover:text-[#8B4A56] transition-colors underline cursor-pointer inline-flex items-center gap-1"
            >
              <Upload className="w-3 h-3" />
              <span>Carregar arquivo de vídeo do seu dispositivo</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

        </div>

        {/* CTA & Oferta logo abaixo do vídeo */}
        <div className="max-w-md mx-auto space-y-4">
          
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#F4EAE3] text-[#7A3C47] text-xs font-semibold tracking-wide border border-[#E8DAD0]">
            A partir de R$ 9,99 · Acesso Imediato
          </div>

          <div>
            <a
              href="#kits"
              className="w-full sm:w-auto px-10 py-4.5 bg-[#8B4A56] hover:bg-[#783C47] text-white text-sm font-semibold tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>QUERO ORGANIZAR MEU CASAMENTO</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#7A736F] pt-1">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3B5B44]" />
              Pagamento seguro
            </span>
            <span aria-hidden="true">·</span>
            <span>Acesso digital imediato</span>
            <span aria-hidden="true">·</span>
            <span>Pronto para usar</span>
          </div>

        </div>

      </div>
    </section>
  );
};
