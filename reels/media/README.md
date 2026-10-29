# Reels media and provenance

Newly authored learning assets only. No original presentations, slide screenshots or complete source transcripts are included.

## Full-length visual explanations

The final player uses137 finite HyperFrames0.8.214 HTML compositions under `../films/`, plus reduced-motion variants. Their796 semantic beats are written for the authored course and anchored to the approved narration's actual word boundaries. Each timeline covers the complete explanation, including the complete section narrations with study pauses. The external speech clock drives the real HyperFrames seek position, including pause/scrub. The former short MP4 loops and posters were removed. The public site contains the final player/runtime, never Studio or an editor.

## Frozen narration

467 pre-generated Slovak narration files use Microsoft `sk-SK-ViktoriaNeural`, rate+8%, obtained with edge-tts7.3.1. The user approved this voice. Following the requested pacing adjustment,137 explanation/example files contain short conversational breaths at word-safe concept boundaries; existing natural sentence pauses are retained. No spoken words or speaker identity were changed; the original recordings remain in private local working storage. Word-boundary metadata drives phrase captions and visual beat timing. Narration covers the authored public lessons, examples, recall/quiz prompts and answers, with original short hooks. No credentials or provider access are needed by the public player.

## Original instrumental music

- `music-focus.mp3`: “Focus”,80BPM,24seconds; electric keys, pad, bass and restrained drums.
- `music-flow.mp3`: “Flow”,88BPM,21.818seconds; warm keys and moving bass.
- `music-spark.mp3`: “Spark”,96BPM,20seconds; brighter melodic keys and a light beat.

Composed for this study app using deterministic local additive synthesis; no third-party recordings, samples or recognizable song melodies. Eight bars with circularly mixed note tails. Stereo44.1kHzMP3 at112kbps. Original arrangement and synthesized sounds may be used and adapted with this app.

## Speech-aware mixing

Official `@hyperframes/core`0.8.214 carveProfile, analyseCarveBands, analyseCarveDynamics and analyseCarveDuck analysed all467 narration clips against all three music beds. The frozen profiles in `../mix-profiles.js` drive six peakingEQ bands and a music-gain envelope in the browser. The baseline music volume0.12 is applied once; voice is unaffected. Music resets to the same origin for every narration/answer and follows seeking. The padded speech clock maps back to the original measured voice-carve clock during study pauses. Profile simplification stays within0.15dB. Representative official offline audio renders passed without clipping; the original470 analysis inputs were unchanged; the later pacing adjustment adds silence to137 speech files. Voice/music switches are independent. Generated2026-10-29.
